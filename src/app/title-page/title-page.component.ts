import { Component, Input } from '@angular/core';
import { pagetitle } from '../core/interfaces/Idata';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {
@Input() data?: pagetitle;

}
