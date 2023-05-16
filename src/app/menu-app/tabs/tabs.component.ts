import { ITabItem } from './../interfaces/tab-item.interface';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IComponentNameType } from '../interfaces/component-name-type.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css', '../header/header-app.component.css' ]
})
export class TabsComponent {
 @Input() tabs: ITabItem[] =[];
 
 activeTab!: ITabItem;
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
// @Output() selectedTabName = new EventEmitter<IComponentNameType>();
  // paramId: string;
  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {
      // this.paramId = activeRoute.snapshot.params['paramID'];
    }

  ngOnInit() {
    this.activeTab = this.tabs[0];
    // this.selectEd.emit({name: 'rephrase', style: 'red'});
  }

  @Output() selectEd = new EventEmitter<{name: string, styleClass: string}>();
  // @Output() selectEd = new EventEmitter<{name: string, style: string}>({name: '(rephrase)',style: 'red'});
  // navigateToComponent(tab : ITabItem) {
  //   // this.router.navigate([tab.url]);
  //   // this.selectedComponentName = component;
  //   this.tabs.forEach(t => t.isSelected = false);
  //   tab.isSelected=true;
  //   // this.selectedTabName.emit(tab.url);
  // }
  onActiveItemChange (event: any) {
    this.activeTab = event;
    this.selectEd.emit(event);
    console.log(this.activeTab, 333)
  }

}
