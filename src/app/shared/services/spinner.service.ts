import { Injectable, signal } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading = signal<boolean>(false);

  public hide() {
    this.isLoading.set(false);
  };

  public show(timeout: number = 0) {
    this.isLoading.set(true);
    if (timeout > 0) {
      timer(timeout).subscribe(() => this.hide()); // Ocultar después del tiempo especificado
    }
  };

  constructor() { }
}
