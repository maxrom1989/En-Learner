import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/common/services/data-transfer.service';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['../../common/components/header/header-app.component.css', './meanings.component.css']
})

export class MeaningsComponent {

  tabName: string = '(meanings)';
  baseInput: string = '';
  baseOutput: string = '';

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() { }

  handleRephrase(): void {
    this.baseOutput = this.baseInput;
  }

}
