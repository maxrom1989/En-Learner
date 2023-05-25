import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IInputDataTransfer } from '../../interfaces/input-data-transfer.interface';
import { DataTransferService } from '../../services/data-transfer.service';
import { ClipboardToDataService } from '../../services/clipboard-to-data.service';
import { IStyle } from '../../interfaces/style.interface';

@Component({
  selector: 'clipboard-list',
  templateUrl: './clipboard-list.component.html',
  styleUrls: ['./clipboard-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClipboardListComponent implements OnInit {

  clipboardItem?: IInputDataTransfer;
  serviceData: IInputDataTransfer[] = [{
    input: '',
    tab: '',
    style: ''
  }];
  listBoxWidth: IStyle =  {width: '100%'};
  listBoxHeight: IStyle = {height: '464px'};

  constructor(private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.observeClipboardList();
  }

  transferClipboardToInput(serviceDataInput: string): void {
    this.clipboardToData.transferData(serviceDataInput);
  }

  deleteClipboardItem(index: number): void {
    if (index > -1) {
      this.serviceData.splice(index, 1);
    }
  }

  observeClipboardList(): void {
    this.dataTransferService.currentData.subscribe(incomingData => {
      const existingDataIndex = this.serviceData.findIndex(
        item => item.input === incomingData.input);
      if (existingDataIndex !== -1) {
        this.serviceData.splice(existingDataIndex, 1);
      }
      this.serviceData.unshift(incomingData);
      this.clipboardItem = this.serviceData?.[0]
      this.cdr.markForCheck();
    });
  }  

}

