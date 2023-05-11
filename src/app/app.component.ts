import { MainDataService } from './menu-app/services/main-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isError?: boolean;
  errorMessage?: string;
  constructor (private service : MainDataService) {}

  ngOnInit (){
  this.service.mainData$.subscribe({
    next: _isError => {
      this.isError = _isError.isError;
      // if (!this.errorMessage) {
        this.errorMessage = _isError.errorMessage;
      // }
    }
  });
}
  

}