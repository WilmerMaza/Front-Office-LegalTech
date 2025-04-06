import { Component } from '@angular/core';

@Component({
  selector: 'app-bandera-legal',
  standalone: true,
  imports: [],
  template: `<section class="bandera_legal">
    <div class="content_bandera">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="103"
        height="106"
        viewBox="0 0 103 106"
        fill="none"
        class="bander_icon"
      >
        <path
          d="M51.3729 52.8988L12.7161 96.3877V85.1975L30.5186 52.8988H10.4272V43.4889H92.3186V52.8988H72.2272L90.0297 85.1975V96.3877L51.3729 52.8988Z"
          fill="#641378"
        />
        <path
          d="M51.3729 97.405L12.7161 105.289L51.3729 64.3433L90.0296 105.416L51.3729 97.405Z"
          fill="#641378"
        />
        <path
          d="M97.1507 15.0049L86.2149 36.8765H16.5309L5.59515 15.0049L30.5186 29.2469L51.3729 7.12097L72.2272 29.2469L97.1507 15.0049Z"
          fill="#641378"
        />
        <circle cx="51.4999" cy="5.72222" r="5.72222" fill="#641378" />
        <circle cx="97.2776" cy="15.1321" r="5.72222" fill="#641378" />
        <circle cx="5.72222" cy="15.1321" r="5.72222" fill="#641378" />
      </svg>
    </div>
  </section>`,
  styleUrl: './bandera-legal.component.scss',
})
export class BanderaLegalComponent {}
