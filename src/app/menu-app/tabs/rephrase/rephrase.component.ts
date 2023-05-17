import { MainDataService } from './../../services/main-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { EMPTY, catchError, delay, of, throwError } from 'rxjs';
import { RephraseMethod } from '../../interfaces/rephrase-method';
import { MenuItem, MessageService } from 'primeng/api';
import { DataTransferService } from '../../services/data-transfer.service';
import { RephraseService } from '../../services/rephrase.service';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../header/header-app.component.css', './rephrase.component.css'],
  // providers: [ MessageService ]
  })
export class RephraseComponent implements OnInit{

  baseInput: string  = '';
  baseOutput: string  = '';
  errorMessage?: string;
  selectedRephraseMethod?: RephraseMethod;
  tabName: string = '(rephrase)';
  // isError: boolean = false;
  rephraseMethods: RephraseMethod[] =[
    {name: 'Polite', forLabel:'P'},
    {name: 'Official', forLabel:'O'},
    {name: 'Regular', forLabel:'R'} 
   ];
  // buttonItems: MenuItem[]; 
  
  constructor (public mainDataService: MainDataService, 
    private messageService: MessageService,
    private dataTransferService: DataTransferService,
    private rephraseService: RephraseService) {
    // this.buttonItems = [
    //   {
    //     label: 'Add To Clipboard',
    //     icon: 'pi pi-refresh',
    //     command: () => {
    //       this.update();
    //       }
    //     }
    // ];
  }

  ngOnInit(): void {
      this.selectedRephraseMethod = this.rephraseMethods[0];
      this.mainDataService.getMainData()
      .pipe(
        catchError((err)=> {
          this.errorMessage = err.message;
          return EMPTY;
          
        })
      )
      .subscribe(_ => {
        this.baseOutput = _.data!;
      });
      // this.dataTransferService.transferData(this.baseInput, this.tabName);
  }
  // tabData = this.dataTransferService.transferData(this.baseInput, this.tabName);

  // handleRephrase(): void {
  //   console.log(this.baseInput, this.baseOutput);
  //   this.mainDataService.transferMainData(this.baseInput)
  // };

  ngAfterViewChecked(){
    this.rephraseService.setRephraseMethod(this.selectedRephraseMethod!);
  }
  handleRephrase(input: string): void {
  
    this.mainDataService.getAnswer(input).subscribe({
      next:(res) => {
        this.messageService.add(
          { severity: 'info', summary: 'Success', detail: 'Data Saved' });
        console.log(res);
        this.baseOutput = res;
        // this.isError = false;
      },
      error:(err) => {
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





