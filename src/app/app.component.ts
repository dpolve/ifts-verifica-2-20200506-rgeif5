import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  visualizzaRegioni: boolean = false;
  visualizzaProvince: boolean = false;
  
  onRegioni() {
    this.visualizzaRegioni = true;
    this.visualizzaProvince = false;
  }

  onProvince() {
    this.visualizzaRegioni = false;
    this.visualizzaProvince = true;
  }

}
