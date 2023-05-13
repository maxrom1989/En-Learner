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
      routerLink: ['/RephraseComponent'],
      // url: 'RephraseComponent',
      isSelected: true
      },
      {
      componentName: 'Meanings',
      routerLink: ['/MeaningsComponent'],
      // url: 'MeaningsComponent',
      isSelected: false
      },
      {
      componentName: 'Generator',
      routerLink: ['/GeneratorComponent'],
      // url: 'GeneratorComponent',
      isSelected: false
      }
  ];

  
  // selectedTabName: IComponentNameType = this.tabsList[0]?.url;
  constructor(private router: Router) {}

  onTabNameSelected(tab: IComponentNameType) {
    // this.selectedTabName = tab;
    // this.router.navigate([tab])
  }

}
