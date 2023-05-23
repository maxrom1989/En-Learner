import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { MainDataService } from '../../common/services/main-data.service';
import { RephraseService } from '../../common/services/rephrase.service';
import { IRephraseMethod } from '../../common/interfaces/rephrase-method.interface';
import { ITabName } from 'src/app/common/interfaces/tab-name.interface';
import { ITabStyle } from 'src/app/common/interfaces/tab-style.interface';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../common/components/header/header-app.component.css', './rephrase.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RephraseComponent implements OnInit, AfterViewChecked {

  rephraseMethods: IRephraseMethod[] = [
    { name: 'Polite', forLabel: 'P' },
    { name: 'Official', forLabel: 'O' },
    { name: 'Regular', forLabel: 'R' }
  ];
  tabName: ITabName = '(rephrase)';
  selectedStyle: ITabStyle ='red';
  baseInput: string = '';
  baseOutput: string = '';
  errorMessage?: string;
  selectedRephraseMethod?: IRephraseMethod;
  constructor(public mainDataService: MainDataService,
    private rephraseService: RephraseService,
    private changeDetector : ChangeDetectorRef) { }

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

  // handleRephrase(input: string): void {
  //   this.mainDataService.getAnswer(input).subscribe({
  //     next: (res) => {
  //       this.messageService.add(
  //         { severity: 'info', summary: 'Success', detail: 'Data Saved' });
  //       this.baseOutput = res;
  //     },
  //     error: (err) => {
  //       this.messageService.add(
  //         { severity: 'error', summary: 'Error', detail: err });
  //       console.warn(err);
  //     }
  //   })
  // };

  // update() {
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Added to ClipBoard' });
  // }
  
}