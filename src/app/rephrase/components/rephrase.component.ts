import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { RephraseMethod } from 'src/app/common/interfaces/rephrase-method';
import { MainDataService } from 'src/app/common/services/main-data.service';
import { DataTransferService } from 'src/app/common/services/data-transfer.service';
import { RephraseService } from 'src/app/common/services/rephrase.service';
import { InputOutputComponent } from 'src/app/common/components/input-output/input-output.component';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../common/components/header/header-app.component.css', './rephrase.component.css'],
})

export class RephraseComponent implements OnInit {

  rephraseMethods: RephraseMethod[] = [
    { name: 'Polite', forLabel: 'P' },
    { name: 'Official', forLabel: 'O' },
    { name: 'Regular', forLabel: 'R' }
  ];
  tabName: string = '(rephrase)';
  selectedStyle: string ='red';
  baseInput: string = '';
  baseOutput: string = '';
  errorMessage?: string;
  selectedRephraseMethod?: RephraseMethod;
  constructor(public mainDataService: MainDataService,
    private messageService: MessageService,
    private dataTransferService: DataTransferService,
    private rephraseService: RephraseService) { }

  ngOnInit(): void {
    this.selectedRephraseMethod = this.rephraseMethods[0];
    this.mainDataService.getMainData()
      .pipe(
        catchError((err) => {
          this.errorMessage = err.message;
          return EMPTY;
        })
      )
      .subscribe(_ => {
        this.baseOutput = _.data!;
      });
  }

  ngAfterViewChecked() {
    this.rephraseService.setRephraseMethod(this.selectedRephraseMethod!);
  }

  handleRephrase(input: string): void {
    this.mainDataService.getAnswer(input).subscribe({
      next: (res) => {
        this.messageService.add(
          { severity: 'info', summary: 'Success', detail: 'Data Saved' });
        this.baseOutput = res;
      },
      error: (err) => {
        this.messageService.add(
          { severity: 'error', summary: 'Error', detail: err });
        console.warn(err);
      }
    })
  };

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Added to ClipBoard' });
  }
  
}





