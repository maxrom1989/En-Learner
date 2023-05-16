import { Component, Input } from '@angular/core';
import { DataTransferService } from '../menu-app/services/data-transfer.service';
import { InputDataTransfer } from '../menu-app/interfaces/input-data-transfer';

@Component({
  selector: 'clipboard-app',
  templateUrl: './clipboard-app.component.html',
  styleUrls: ['./clipboard-app.component.css']
})
export class ClipboardAppComponent {
  inputData: string = '';
  tabName: string = '';
  serviceData: InputDataTransfer[] = [{input: '',
    tab: '',
    style: 'red'}];
  @Input() selectedTabName?: string;
  selectedStyle?: string;
  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
    this.dataTransferService.currentData.subscribe(data => {
      // this.selectedStyle = data.style;
      // if (!data.input) {
      //   this.serviceData.pop()
      // }
      this.serviceData.push(data);
      // this.inputData = data.input;
      // this.tabName = data.tab;
    });
    if (this.tabName) {
      this.selectedTabName = this.tabName;
    }
  }

}

