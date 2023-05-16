import { MainDataService } from './menu-app/services/main-data.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  // isError?: boolean;
  // errorMessage?: string;
  constructor () {}

  ngOnInit (){
    // this.service.error$.subscribe({
    //   next: (error) => {
    //     this.isError = !!error;
    //     this.errorMessage = error;
    //   },
    // });
    // document.body.addEventListener('click', (event) => {
    //   const modal = document.querySelector('.loading-spinner');
    //   if (event.target === modal) {
    //     this.closeSpinner();
    //   }
    // });
  }


  // closeSpinner(){
  //   this.service.error$.next('');
  // }

  
}

