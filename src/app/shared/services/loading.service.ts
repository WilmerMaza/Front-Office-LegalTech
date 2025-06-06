import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading$.asObservable();

  /** Muestra el loader y garantiza un tiempo mínimo visible */
  public showLoader(minimumTimeMs = 500): void {
    this._loading$.next(true);
    setTimeout(() => this.hideLoader(), minimumTimeMs);
  }

  /** Oculta el loader */
  public hideLoader(): void {
    this._loading$.next(false);
  }
}
