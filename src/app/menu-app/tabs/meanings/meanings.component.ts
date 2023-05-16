import { Component } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['../../header/header-app.component.css', './meanings.component.css']
})
export class MeaningsComponent {

  baseInput: string = '';
  baseOutput: string = '';
  tabName: string = '(meanings)';

  constructor (private dataTransferService: DataTransferService) {}
  ngOnInit () {
    // this.dataTransferService.transferData(this.baseInput, this.tabName);
  }

  
  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }
}
