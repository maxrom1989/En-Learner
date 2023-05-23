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
  repeats?: number = 2;
  selectedTabName: string = this.tabsList.find((tab) => tab.isSelected)?.clipboardName!;
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
