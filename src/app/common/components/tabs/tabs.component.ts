import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { ITabItem } from '../../interfaces/tab-item.interface.interface';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabsComponent implements OnInit{

  @Input() tabs: ITabItem[] = [];

  @Output() selectedTab = new EventEmitter<{ clipboardName: string, styleClass: string }>();

  activeTab!: { clipboardName: string, styleClass: string };

  constructor(private router: Router) { }

  ngOnInit() {
    this.routeNavigationEnd();
  }

  //MenuItem библиотечный интерфейс
  onActiveItemChange(event: MenuItem): void {
    this.activeTab.clipboardName = event.label!;
    this.selectedTab.emit(this.activeTab);
  }

  routeNavigationEnd(): void {
    this.router.events.pipe(filter((tabEvent) => {
      return tabEvent instanceof NavigationEnd
    }), take(1))
    .subscribe(() => {
      let prevTab = this.tabs.find((prevTab) => {
        return prevTab.routerLink.includes(this.router.url)
      })
      this.activeTab != prevTab;
    })
  }
}
