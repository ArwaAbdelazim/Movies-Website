import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject';

  //logout after 5s
  /* constructor(private _AuthService:AuthService)
  {
    _AuthService.userData.subscribe(()=>
    {
      if(_AuthService.userData.getValue() != null)
      {
        setTimeout(() => {
          _AuthService.logOut();
          
        }, 5000);
      }

    });
  } */
}
