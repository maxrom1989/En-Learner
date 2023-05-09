import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITabItem } from '../interfaces/tab-item.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css', '../header/header-app.component.css' ]
})
export class TabsComponent {
  @Input() tabs: ITabItem[] = [];
  selectedComponentName: string = '';
  defaultComponentName : string = 'RephraseComponent';

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedComponentName = this.defaultComponentName;
    this.navigateToComponent(this.selectedComponentName);
  }


  navigateToComponent(component: string) {
    this.router.navigate([component]);
    this.selectedComponentName = component;
  }
}
