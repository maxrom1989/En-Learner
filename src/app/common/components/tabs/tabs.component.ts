import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter, take } from 'rxjs';
import { ITabItem } from '../../interfaces/tab-item.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css', '../header/header-app.component.css']
})

export class TabsComponent {

  @Input() tabs: ITabItem[] = [];

  @Output() selectEd = new EventEmitter<{ name: string, styleClass: string }>();

  activeTab!: ITabItem;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(filter((e) => {
      return e instanceof NavigationEnd
    }), take(1)).subscribe((res) => {
      let da = this.tabs.find((tab) => {
        return tab.routerLink.includes(this.router.url)
      })
      this.activeTab != da;
    })
  }

  onActiveItemChange(event: any) {
    this.activeTab = event;
    this.selectEd.emit(event);
  }

}
