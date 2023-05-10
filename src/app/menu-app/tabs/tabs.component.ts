import { ITabItem } from './../interfaces/tab-item.interface';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IComponentNameType } from '../interfaces/component-name-type.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css', '../header/header-app.component.css' ]
})
export class TabsComponent {
 @Input() tabs: ITabItem[] =[];
    // {
    // componentName: 'RephraseComponent',
    // url: 'RephraseComponent',
    // isSelected: true
    // },
    // {
    // componentName: 'MeaningsComponent',
    // url: 'MeaningsComponent',
    // isSelected: false
    // },
    // {
    // componentName: 'GeneratorComponent',
    // url: 'GeneratorComponent',
    // isSelected: false
    // }
  // selectedComponentName: IComponentNameType = '';
  // defaultComponentName : IComponentNameType = 'RephraseComponent';
@Output() selectedTab = new EventEmitter<IComponentNameType>();
  constructor(private router: Router) {}

  // ngOnInit() {
  //   this.selectedComponentName = this.defaultComponentName;
  //   this.navigateToComponent(this.selectedComponentName);
  // }


  navigateToComponent(tab : ITabItem) {
    // this.router.navigate([tab.url]);
    // this.selectedComponentName = component;
    this.tabs.forEach(t => t.isSelected = false);
    tab.isSelected=true;
    this.selectedTab.emit(tab.url);
  }
}
