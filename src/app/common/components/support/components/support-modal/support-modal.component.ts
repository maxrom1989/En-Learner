import { ISupportData } from './../../interfaces/support-data';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SupportDialogComponent } from "../../support-dialog.component";
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TopicsGetService } from '../../services/topics-get.service';
import { MessageService } from 'primeng/api';

const URL_USERS = 'https://reqres.in/api/users';
const REGEX_EMAIL_PHONE = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$|^\\+?\\d{1,3}\\s?\\(?(\\d{1,4})\\)?[-.\\s]?(\\d{1,4})[-.\\s]?(\\d{1,4})[-.\\s]?(\\d{1,9})$';

@Component({
  standalone: true,
  selector: 'support-modal',
  templateUrl: './support-modal.component.html',
  styleUrls: ['./support-modal.component.css'],
  providers: [DialogService, TopicsGetService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    InputTextareaModule,
    FormsModule,
    ProgressSpinnerModule,
    SupportDialogComponent
  ]
})

export class SupportModalComponent {
  supportData?: ISupportData[];
  supportUser!: string;
  topics: string[] = [];
  selectedTopic!: string;
  supportMessage!: string;
  pattern: string = REGEX_EMAIL_PHONE;
  showSpinner: boolean = false;
  error?: string;
  userFormTouched: boolean = false;
  private inputChangeSubject: Subject<string> = new Subject<string>();

  get isDisabled(): boolean {
    return !this.supportMessage || !this.selectedTopic || !this.supportUser;
  }

  constructor(private messageService: MessageService,
    public ref: DynamicDialogRef,
    private getTopics: TopicsGetService) {
    this.inputChangeSubject
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.supportUser = value.toUpperCase();
        console.log('Debounced input value:', value, this.supportUser);
      });
  }

  ngOnInit() {
    this.fetchTopics();
  }


  // perenesti v service
  fetchTopics() {
    this.getTopics.fetchTopics().subscribe(
      (topics) => {
        this.topics = topics;
        console.log('Topics:', topics);
      },
      (error: string) => {
        this.error = error;
        console.error('Error fetching topics:', error);
      }
    );
  }
  // this.http.get<ITopicsList>(URL_USERS).subscribe(
  //   (response: ITopicsList) => {
  //     if (!response.data[0].first_name) {
  //       this.error = 'No topics fetched!'
  //     } else {
  //       this.topics = response.data.map(topic => topic.first_name);
  //       console.log('Firstname ', this.topics, "Response:", response)
  //     }
  //   },
  //   (error) => {
  //     this.error = `Error fetching topics: ${error.statusText}: ${error.status}`;
  //     console.error('Error fetching topics:', error);
  //   }
  // );
  // }

  submitForm() {
    const formData = {
      selectedTopic: this.selectedTopic,
      supportUser: this.supportUser,
      supportMessage: this.supportMessage
    };
    this.showSpinner = true;
    setTimeout(() => {
      console.log("TOPIC: ", formData)
      this.getTopics.postSupportData(formData).subscribe(
        (response: ISupportData) => {
          console.log('Support data submitted:', response);
          this.ref.close(formData);
        },
        (error: string) => {
          this.messageService.add(
            { severity: 'error', summary: 'Error', detail: error });
          console.warn(error);
          this.ref.close();
          this.showSpinner = false;
        }
      );
      this.showSpinner = false;
    }, 5000);
    console.log(this.showSpinner)
    // this.getTopics.postSupportData(formData).subscribe(
    //   (response: ISupportData) => {
    //     console.log('Support data submitted:', response);
    //   },
    //   (error: string) => {
    //     this.messageService.add(
    //       { severity: 'error', summary: 'Error', detail: error });
    //     console.warn(error);
    //     this.ref.close();
    //   },
      // () => {
      //   setTimeout(() => {
      //     console.log("TOPIC: ", formData)
      //     this.ref.close(formData);
      //     this.showSpinner = false;
      //   }, 5000);
      // }
    // );
  }

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.inputChangeSubject.next(inputValue);
  }

}
