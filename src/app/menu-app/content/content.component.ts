import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, Input, Output, OnInit } from '@angular/core';
import { ITabItem } from '../interfaces/tab-item.interface';
import { DataComponent } from '../data/data.component';
import { IComponentNameType } from '../interfaces/component-name-type.interface';
import { filter, take } from 'rxjs';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  tabsList: ITabItem[] = [
    {
      componentName: 'Rephrase',
      routerLink: ['/RephraseComponent'],
      // url: 'RephraseComponent',
      clipboardName:'(rephrase)',
      styleClass: 'red',
      isSelected: true
      },
      {
      componentName: 'Meanings',
      routerLink: ['/MeaningsComponent'],
      // url: 'MeaningsComponent',
      clipboardName:'(meanings)',
      styleClass: 'green',
      isSelected: false
      },
      {
      componentName: 'Generator',
      routerLink: ['/GeneratorComponent'],
      // url: 'GeneratorComponent',
      clipboardName:'(generator)',
      styleClass: 'blue',
      isSelected: false
      }
  ];

  
  selectedTabName: string = this.tabsList.find((tab) => tab.isSelected)?.clipboardName!;
  selectedStyle: string = '';
  //  = this.tabsList.find((style) => style.isSelected)?.clipboardInfo.style!;
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,) {}

    ngOnInit () {
    this.router.events.pipe(
      filter((e) => {
        return e instanceof NavigationEnd
      }), 
      take(1)
      ).subscribe((res) => {
        console.log(this.router.url)
        let da = this.tabsList.find((tab) => {
          return tab.routerLink.includes(this.router.url)
        })
        this.selectedTabName=da!.clipboardName;
        this.selectedStyle = da!.styleClass;
        console.log('DA: ', da, 'adsadsa')
    })
  }
  onTabNameSelected(event: any) {
    this.selectedTabName  = event.clipboardName;
    this.selectedStyle = event.styleClass;
    console.log("TABNAMESELECTED: ", event, this.selectedTabName, this.selectedStyle, 'content')
  }

}
