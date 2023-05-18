import { Component, Input, ViewChild } from '@angular/core';
import { DataTransferService } from '../menu-app/services/data-transfer.service';
import { InputDataTransfer } from '../menu-app/interfaces/input-data-transfer';
import { ClipboardToDataService } from '../menu-app/services/clipboard-to-data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Listbox } from 'primeng/listbox';

@Component({
  selector: 'clipboard-app',
  templateUrl: './clipboard-app.component.html',
  styleUrls: ['./clipboard-app.component.css']
})


export class ClipboardAppComponent {
  // @ViewChild('listbox') listbox: Listbox;
  inputData: string = '';
  tabName: string = '';
  clipboardItem?: InputDataTransfer;
  serviceData: InputDataTransfer[] = [{
    input: '',
    tab: '',
    style: ''
  }];
  @Input() selectedTabName?: string;
  selectedStyle?: string;
  constructor(private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataTransferService.currentData.subscribe(data => {
      const existingDataIndex = this.serviceData.findIndex(_data => _data.input === data.input);
      if (existingDataIndex !== -1) {
          this.serviceData.splice(existingDataIndex, 1);
      }
      this.serviceData.unshift(data);
      this.inputData = data.input;
      console.log("InputData ", this.inputData)
      if (this.serviceData.length > 0) {
        this.clipboardItem = this.serviceData[0];
      }
    });
    if (this.tabName) {
      this.selectedTabName = this.tabName;
    }
    
  }

  ngAfterViewChecked() {
   this.serviceData;
  }

  transferClipboardToData(aa: string) {
    this.clipboardToData.transferData(aa);

  }

  deleteClipboardItem(index: number): void {
    if (index > -1) {
      this.serviceData.splice(index, 1);
      console.log('Array', this.serviceData)
    }
    console.log('NoArray', this.serviceData)
  }
  
}

