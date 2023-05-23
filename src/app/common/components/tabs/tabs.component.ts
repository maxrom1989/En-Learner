import { Component, Output, Input, EventEmitter, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';
import { ITabItem } from '../../interfaces/tab-item.interface.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css', '../header/header-app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabsComponent implements OnInit{

  @Input() tabs: ITabItem[] = [];

  @Output() selectEd = new EventEmitter<{ name: string, styleClass: string }>();

  activeTab!: ITabItem;

  constructor(private router: Router,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.events.pipe(filter((e) => {
      return e instanceof NavigationEnd
    }), take(1)).subscribe((res) => {
      let prevTab = this.tabs.find((prevTab) => {
        return prevTab.routerLink.includes(this.router.url)
      })
      this.activeTab != prevTab;
    })
  }

  onActiveItemChange(event: any) {
    this.activeTab = event;
    this.selectEd.emit(event);
  }

}
