import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-button-contacto',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './button-contacto.component.html',
  styleUrl: './button-contacto.component.scss',
})
export class ButtonContactoComponent implements AfterViewInit {
  @ViewChild('floatingButton') floatingButton!: ElementRef<HTMLButtonElement>;

  private isDragging: boolean = false;
  private hasMoved: boolean = false;
  private offsetY: number = 0;
  private startY: number = 0;

  constructor(public dialog: MatDialog) {}

  public ngAfterViewInit(): void {
    const btn = this.floatingButton.nativeElement;

    // Desktop
    btn.addEventListener('mousedown', (event: MouseEvent) =>
      this.onMouseDown(event)
    );
    btn.addEventListener('click', () => this.openContactForm());

    // Mobile - con passive: true
    btn.addEventListener(
      'touchstart',
      (event: TouchEvent) => this.onTouchStart(event),
      { passive: true }
    );
    btn.addEventListener('touchend', () => this.onTouchEnd(), {
      passive: true,
    });
  }

  // --------- DESKTOP EVENTS ---------

  private onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.hasMoved = false;

    const rect = this.floatingButton.nativeElement.getBoundingClientRect();
    this.offsetY = event.clientY - rect.top;
    this.startY = event.clientY;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  private onMouseMove = (event: MouseEvent): void => {
    if (!this.isDragging) return;

    const dy = event.clientY - this.startY;
    if (Math.abs(dy) > 5) this.hasMoved = true;

    let newTop = event.clientY - this.offsetY;
    const maxTop = window.innerHeight - 110;
    const minTop = 50;

    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    this.floatingButton.nativeElement.style.top = `${newTop}px`;
  };

  private onMouseUp = (): void => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  // --------- TOUCH EVENTS ---------

  private onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.hasMoved = false;

    const touch = event.touches[0];
    const rect = this.floatingButton.nativeElement.getBoundingClientRect();
    this.offsetY = touch.clientY - rect.top;
    this.startY = touch.clientY;

    document.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', this.onTouchEnd);
  }

  private onTouchMove = (event: TouchEvent): void => {
    if (!this.isDragging) return;

    const touch = event.touches[0];
    const dy = touch.clientY - this.startY;
    if (Math.abs(dy) > 5) this.hasMoved = true;

    let newTop = touch.clientY - this.offsetY;
    const maxTop = window.innerHeight - 110;
    const minTop = 50;

    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    this.floatingButton.nativeElement.style.top = `${newTop}px`;
    event.preventDefault();
  };

  private onTouchEnd = (): void => {
    this.isDragging = false;
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  };

  // --------- MODAL ---------

  private openContactForm(): void {
    if (this.hasMoved) return;

    // Quitar el foco del botón antes de abrir el modal
    if (typeof document !== 'undefined') {
      document.activeElement instanceof HTMLElement &&
        document.activeElement.blur();
    }

    this.dialog.open(ContactDialogComponent, {
      width: '90%',
      height: '60%',
      backdropClass: 'backdrop-background',
    });
  }
}
