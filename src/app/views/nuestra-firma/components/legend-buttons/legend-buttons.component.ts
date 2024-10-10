import { Component, input } from '@angular/core';

@Component({
  selector: 'app-legend-buttons',
  standalone: true,
  imports: [],
  template: ` <section class="mision-button">
    <button
      class="formation-button"
      (click)="toggle()"
      [attr.aria-expanded]="show"
    >
    <span>{{ title()[0] }} <span class="strong">{{ title()[1] }}</span></span>   <img [src]="show? 'assets/icons/arrow_down.svg':'assets/icons/arrow_up.svg'">
    </button>
    @if (show) {
    <div class="box">
      <p>
        {{ content() }} <span></span>
      </p>
    </div>
    }
  </section>`,
  styleUrl: './legend-buttons.component.scss',
})
export class LegendButtonsComponent {
  public show: boolean = false;
  public title = input.required<string[]>();
  public content = input.required<string>();
  public arrow: boolean = false;

  public toggle = (): boolean => (this.show = !this.show);
}
