import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-button-contacto',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './button-contacto.component.html',
  styleUrl: './button-contacto.component.scss'
})
export class ButtonContactoComponent {
  public isModalOpen: boolean = false;

  constructor(public dialog: MatDialog) { }

  openContactForm(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '50%',
      height:'50%',
      backdropClass: 'backdrop-background' // opcional, para personalizar el fondo
    });
  }
}
