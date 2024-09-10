import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamMember } from '../../interface/ImgInterface';
import { TeamCardComponent } from './team-card/team-card.component';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.scss'],
  imports: [CommonModule, TeamCardComponent, FormsModule],
  standalone: true
})
export class NuestroEquipoComponent {

  public teamMembers: TeamMember[] = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-suzette.png?alt=media&token=c60b101b-e4e0-4451-9874-6237de6b8a9d',
      img_movil: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-sucette-movil.png?alt=media&token=6aa78b5e-b82f-4a97-a08c-0a43c1565d59',
      name: 'CATHERINE SUZETTE GÓMEZ',
      position: 'Representante legal - Gerente',
      description: 'Abogada con amplia experiencia en asesoría legal y litigios, con más de 21 años de experiencia en el ejercicio del derecho. En materia de derecho comercial y civil. Igualmente, atención de procesos laborales y administrativos como abogada.'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-mirna.png?alt=media&token=6aa76de4-266a-46e4-973f-a005ca6459e5',
      img_movil: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-mirna-movil.png?alt=media&token=6bbcd829-9088-42d4-88d3-e89ec97a2b5a',
      name: 'MIRNA AGUILERA',
      position: 'Abogada Junior',
      description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-isabel.png?alt=media&token=a8393edc-7afa-4749-b1d4-54046f4b30f8',
      img_movil: 'https://firebasestorage.googleapis.com/v0/b/legaltech-6d712.appspot.com/o/member-isabel-movil.png?alt=media&token=94e0dbeb-c678-4361-8fc2-36e55fcb40a3',
      name: 'ISABEL PINTO CALLE',
      position: 'Abogada Junior',
      description: 'Abogada bilingüe, con experiencia en asesoramiento a empresas privadas en el área laboral y contractual. Especializada en la rama judicial, específicamente en el área del Derecho Contencioso Administrativo.'
    },
  ];
}
