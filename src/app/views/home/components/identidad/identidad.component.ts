import { Component } from '@angular/core';
import { BanderaLegalComponent } from '../../../../shared/bandera-legal/bandera-legal.component';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-identidad',
  standalone: true,
  imports: [BanderaLegalComponent,TranslateModule],
  templateUrl: './identidad.component.html',
  styleUrl: './identidad.component.scss'



})
export class IdentidadComponent {

}
