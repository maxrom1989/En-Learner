import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ITabItem } from '../interfaces/tab-item.interface';
import { IComponentNameType } from '../interfaces/component-name-type.interface';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  tabsList: ITabItem[] = [
    {
      componentName: 'Rephrase',
      url: 'RephraseComponent',
      isSelected: true
      },
      {
      componentName: 'Meanings',
      url: 'MeaningsComponent',
      isSelected: false
      },
      {
      componentName: 'Generator',
      url: 'GeneratorComponent',
      isSelected: false
      }
  ];


  selectedTab: IComponentNameType = this.tabsList[0]?.url;
  constructor(private router: Router) {}

  onTabSelected(tab: IComponentNameType) {
    this.selectedTab = tab;
    this.router.navigate([tab])
  }

}
