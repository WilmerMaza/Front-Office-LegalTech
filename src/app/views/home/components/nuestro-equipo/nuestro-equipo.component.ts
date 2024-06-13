import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './team-card/team-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.scss'],
  imports: [CommonModule,TeamCardComponent, FormsModule],
  standalone: true,
})
export class NuestroEquipoComponent {
  
  teamMembers = [
    {
      img: 'assets/img/team/member1.webp',
      name: 'CATHERINE GÓMEZ',
      position: 'Representante legal - Gerente',
      description: 'Abogada con amplia experiencia en asesoría legal y litigios, con más de 21 años de experiencia en el ejercicio del derecho. En materia de derecho comercial y civil. Igualmente, atención de procesos laborales y administrativos como abogada.'
    },
    {
      img: 'assets/img/team/member2.webp',
      name: 'MIRNA AGUILERA',
      position: 'Abogada Junior',
      description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    },
    {
      img: 'assets/img/team/member2.webp',
      name: 'Isa',
      position: 'Abogada Junior',
      description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    },
  ];
}
