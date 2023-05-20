import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter, take } from 'rxjs';
import { ITabItem } from '../../interfaces/tab-item.interface';

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
      clipboardName: '(rephrase)',
      styleClass: 'red',
      isSelected: true
    },
    {
      componentName: 'Meanings',
      routerLink: ['/MeaningsComponent'],
      clipboardName: '(meanings)',
      styleClass: 'green',
      isSelected: false
    },
    {
      componentName: 'Generator',
      routerLink: ['/GeneratorComponent'],
      clipboardName: '(generator)',
      styleClass: 'blue',
      isSelected: false
    }
  ];
  repeats?: number = 2;
  selectedTabName: string = this.tabsList.find(
    (tab) => tab.isSelected)?.clipboardName!;
  selectedStyle: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((e) => {
        return e instanceof NavigationEnd
      }),
      take(1)
    ).subscribe(() => {
      let prevTab = this.tabsList.find((tab) => {
        return tab.routerLink.includes(this.router.url)
      })
      this.selectedTabName = prevTab!.clipboardName;
      this.selectedStyle = prevTab!.styleClass;
    })
  }

  onTabNameSelected(event: any) {
    this.selectedTabName = event.clipboardName;
    this.selectedStyle = event.styleClass;
  }

}
