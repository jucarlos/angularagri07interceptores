import { Component } from '@angular/core';

import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor( private paisesService: PaisesService ) {

    this.paisesService.getPaises().subscribe( resp => {
      console.log( resp );
    });



  }
}
