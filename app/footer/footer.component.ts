
import  { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  person: any = {name: 'Agustín', lastname: 'Hernandez Perez'};
}
