import { MainDataService } from './../services/main-data.service';
import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { InputDataTransfer } from '../interfaces/input-data-transfer';
import { DataTransferService } from '../services/data-transfer.service';
import { ClipboardToDataService } from '../services/clipboard-to-data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['../header/header-app.component.css','./data.component.css']
})
export class DataComponent {
  baseInput: string  = '';
  baseOutput: string  = '';
  @Input() selectedStyle: string = '';
  @Input() tabName: string = '';
  buttonItems: MenuItem[]; 


  constructor (public mainDataService: MainDataService, 
    private messageService: MessageService,
    private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService) {
      this.buttonItems = [
        {
          label: 'Add To Clipboard',
          icon: 'pi pi-refresh',
          command: () => {
            // this.dataTransferService.currentData.subscribe(data => {
            //   this.baseInput = data.input;
            //   this.tabName = data.tab;
            //   this.dataTransferService.transferData(this.baseInput, this.tabName, this.selectedStyle);
            // })
            this.dataTransferService.transferData(this.baseInput, this.tabName, this.selectedStyle);
            console.log('TABNAME: ', this.tabName, this.selectedStyle)
            this.update();
            }
          }
      ];
    }

    ngOnInit(){
      this.clipboardToData.data$.subscribe((data) => {
        const lastData = data;
        if (lastData) {
          this.baseInput = lastData;
        }
        console.log('DATA: ',data)
        // this.baseInput = data[length-1].input;
      });
    }
  handleRephrase(input: string): void {
    this.mainDataService.getAnswer(input).subscribe({
      next:(res) => {
        this.messageService.add(
          { severity: 'info', summary: 'Success', detail: "Data: "+ this.baseInput + " Saved" });
        console.log('HandleRephrase', res);
        this.baseOutput = res;
        // this.isError = false;
      },
      
      error:(err) => {
        this.messageService.add(
          { severity: 'error', summary: 'Error', detail: err });
        console.warn(err);
      }
      
    });

  };

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Added to ClipBoard' });
}

}









