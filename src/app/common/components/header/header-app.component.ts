import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderAppComponent { }
