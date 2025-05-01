import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [],
  standalone: true,
  template: `     <address class="links" aria-label="Información de contacto" id="address_footer">
  <table>
    <tbody>
      <tr>
        <th scope="row">
          <img src="icons/telefono.svg" alt="Teléfono" loading="lazy" width="24" height="24" />
        </th>
        <td>
          <a href="tel:3003534323" class="text-footer">3166912248</a> -
          <a href="tel:3226654345" class="text-footer">3053072539</a> -
          <a href="tel:3226654345" class="text-footer">3234339675</a>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <img src="icons/email.svg" alt="Correo electrónico" loading="lazy" width="24" height="24" />
        </th>
        <td>
          <a href="mailto:sucete@abogadosdigitales.com.co" class="text-footer">
            sucete&#64;abogadosdigitales.com.co
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</address>`,
  styleUrl: './address.component.scss'
})
export class AddressComponent {

}
