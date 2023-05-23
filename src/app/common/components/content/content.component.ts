import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { ITabItem } from '../../interfaces/tab-item.interface.interface';
import { tabsList } from './helpers/tabsList';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentComponent implements OnInit{

  tabsList: ITabItem[] = tabsList;

  selectedTab: ITabItem = this.tabsList.find((tab) => tab.isSelected)!;

  get selectedTabName(): string {
    return this.selectedTab?.clipboardName ?? '';
  }
  
  get selectedStyle(): string {
    return this.selectedTab?.styleClass ?? '';
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.routeNavigationEnd();
  }

  onTabNameSelected(event: {clipboardName: string, styleClass: string}): void {
    this.selectedTab.clipboardName = event.clipboardName;
    this.selectedTab.styleClass = event.styleClass;
  }

  routeNavigationEnd(): void{
    this.router.events.pipe(
      filter((tabEvent) => {
        return tabEvent instanceof NavigationEnd
      }),
      take(1)
    ).subscribe(() => {
      let prevTab = this.tabsList.find((tab) => {
        return tab.routerLink.includes(this.router.url)
        
      })
      this.selectedTab.clipboardName = prevTab!.clipboardName;
      this.selectedTab.styleClass = prevTab!.styleClass;
    })
  }

}
