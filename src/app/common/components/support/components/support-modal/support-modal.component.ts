import { ISupportData } from './../../interfaces/support-data';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ITopicsList } from '../../interfaces/topics-list';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SupportDialogComponent } from "../../support-dialog.component";

const URL_USERS = 'https://reqres.in/api/users';
const REGEX_EMAIL_PHONE = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$|^\\+?\\d{1,3}\\s?\\(?(\\d{1,4})\\)?[-.\\s]?(\\d{1,4})[-.\\s]?(\\d{1,4})[-.\\s]?(\\d{1,9})$';

@Component({
    standalone: true,
    selector: 'support-modal',
    templateUrl: './support-modal.component.html',
    styleUrls: ['./support-modal.component.css'],
    providers: [DialogService],
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
  supportUser?: string | null;
  topics: string[] = [];
  selectedTopic?: string | null;
  supportMessage?: string;
  pattern: string = REGEX_EMAIL_PHONE;
  showSpinner: boolean = false;
  error?: string;
  userFormTouched: boolean = false;

  get isDisabled(): boolean {
    return !this.supportMessage || !this.selectedTopic || !this.supportUser;
  }

  constructor(private http: HttpClient,
    public ref: DynamicDialogRef) { }

  ngOnInit() {
    this.fetchTopics();
  }


  // perenesti v service
  fetchTopics() {
    this.http.get<ITopicsList>(URL_USERS).subscribe(
      (response: ITopicsList) => {
        if (!response.data[0].first_name) {
          this.error = 'No topics fetched!'
        } else {
        this.topics = response.data.map(topic => topic.first_name);
        console.log('Firstname ', this.topics, "Response:", response)
        }
      },
      (error) => {
        this.error = `Error fetching topics: ${error.statusText}: ${error.status}`;
        console.error('Error fetching topics:', error);
      }
    );
  }

  submitForm() {
    const formData = {
      selectedTopic: this.selectedTopic,
      supportUser: this.supportUser,
      supportMessage: this.supportMessage
    };
    this.showSpinner = true;
    setTimeout(() => {
      console.log("TOPIC: ", formData)
      this.ref.close(formData);
      this.showSpinner = false;
    }, 5000);
  }
  
}
