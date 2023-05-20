import { Component, Input } from '@angular/core';
import { InputDataTransfer } from '../../interfaces/input-data-transfer';
import { DataTransferService } from '../../services/data-transfer.service';
import { ClipboardToDataService } from '../../services/clipboard-to-data.service';

@Component({
  selector: 'clipboard-list',
  templateUrl: './clipboard-list.component.html',
  styleUrls: ['./clipboard-list.component.css']
})

export class ClipboardListComponent {

  @Input() selectedTabName?: string;

  inputData: string = '';
  tabName: string = '';
  clipboardItem?: InputDataTransfer;
  serviceData: InputDataTransfer[] = [{
    input: '',
    tab: '',
    style: ''
  }];
  selectedStyle?: string;

  constructor(private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService) { }

  ngOnInit(): void {
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

