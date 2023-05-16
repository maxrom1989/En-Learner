import { ITabItem } from './../interfaces/tab-item.interface';
import { Component, Output, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IComponentNameType } from '../interfaces/component-name-type.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter, take } from 'rxjs';


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
    private activeRoute: ActivatedRoute,
    ) {
      // this.paramId = activeRoute.snapshot.params['paramID'];
    }


  ngOnInit() {

    this.router.events.pipe(filter((e) => {
      return e instanceof NavigationEnd
    }), take(1)).subscribe((res) => {
      // console.log(this.router.url)
      let da = this.tabs.find((tab) => {
        return tab.routerLink.includes(this.router.url)
      })
      this.activeTab!=da;
      // console.log(da)
    })

    // this.selectEd.emit({name: 'rephrase', style: 'red'});
    // this.activeRoute.queryParamMap.subscribe((params) => {
    //   const tabName = params.get('tabName');
    //   console.log('TabName: ', tabName, params)
    //   if (tabName) {
    //     this.activeTab.routerLink[0] = tabName;
    //   }
    //   // if (this.tabs[0].routerLink[0] === tabName) {
    //   //   this.activeTab.routerLink[0] =tabName;
    //   // } else if (this.tabs[1].routerLink[0] === tabName) {
    //   //   this.activeTab.routerLink[0] =tabName;
    //   // } else if (this.tabs[2].routerLink[0] === tabName) {
    //   //   this.activeTab.routerLink[0] =tabName;
    //   // }
    // });
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
    // this.router.navigate([], { queryParams: { event }, queryParamsHandling: 'merge' });
  }

}
