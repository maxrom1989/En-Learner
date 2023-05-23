import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ITabName } from 'src/app/common/interfaces/tab-name.interface';
import { ITabStyle } from 'src/app/common/interfaces/tab-style.interface';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['./meanings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MeaningsComponent {

  tabName: ITabName = '(meanings)';
  selectedStyle: ITabStyle ='green';
  baseInput: string = '';
  baseOutput: string = '';

  constructor(private changeDetector: ChangeDetectorRef) { }

  handleRephrase(): void {
    this.baseOutput = this.baseInput;
  }

}
