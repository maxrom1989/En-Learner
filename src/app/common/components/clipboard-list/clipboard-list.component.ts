import { Component, Input, OnInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IInputDataTransfer } from '../../interfaces/input-data-transfer.interface';
import { DataTransferService } from '../../services/data-transfer.service';
import { ClipboardToDataService } from '../../services/clipboard-to-data.service';

@Component({
  selector: 'clipboard-list',
  templateUrl: './clipboard-list.component.html',
  styleUrls: ['./clipboard-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ClipboardListComponent implements OnInit, AfterViewChecked{

  @Input() selectedTabName?: string;

  inputData: string = '';
  tabName: string = '';
  clipboardItem?: IInputDataTransfer;
  serviceData: IInputDataTransfer[] = [{
    input: '',
    tab: '',
    style: ''
  }];
  selectedStyle?: string;
  listBoxWidth: Object =  {"width": '100%'};
  listBoxHeight: Object = { 'height': '464px'};

  constructor(private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataTransferService.currentData.subscribe(data => {
      const existingDataIndex = this.serviceData.findIndex(
        _data => _data.input === data.input);
      if (existingDataIndex !== -1) {
        this.serviceData.splice(existingDataIndex, 1);
      }
      this.serviceData.unshift(data);
      this.inputData = data.input;
      if (this.serviceData.length > 0) {
        this.clipboardItem = this.serviceData[0];
      }
      this.changeDetector.markForCheck();
    });
    if (this.tabName) {
      this.selectedTabName = this.tabName;
    }
  }

  ngAfterViewChecked() {
    this.serviceData;
  }

  transferClipboardToData(data: string) {
    this.clipboardToData.transferData(data);
  }

  deleteClipboardItem(index: number): void {
    if (index > -1) {
      this.serviceData.splice(index, 1);
    }
  }

}

