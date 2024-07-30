import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../interface/ImgInterface';
import { TeamCardComponent } from './team-card/team-card.component';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.scss'],
  imports: [CommonModule,TeamCardComponent, FormsModule],
  standalone: true
})
export class NuestroEquipoComponent {
  
  public teamMembers: TeamMember[]= [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/CATHERIN_SUZETTE_CEO.webp?alt=media&token=3c685aa3-7ab3-429f-b550-9d678989fcbd',
      name: 'CATHERINE SUZETTE GÓMEZ',
      position: 'Representante legal - Gerente',
      description: 'Abogada con amplia experiencia en asesoría legal y litigios, con más de 21 años de experiencia en el ejercicio del derecho. En materia de derecho comercial y civil. Igualmente, atención de procesos laborales y administrativos como abogada.'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/MIRNA_AGUILERA_ABOGADO.webp?alt=media&token=08cc4628-6a95-4db4-a80f-946a0405997c',
      name: 'MIRNA AGUILERA',
      position: 'Abogada Junior',
      description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    },
    // {
    //   img: 'assets/img/team/member2.webp',
    //   name: 'Isa',
    //   position: 'Abogada Junior',
    //   description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    // },
  ];
}
