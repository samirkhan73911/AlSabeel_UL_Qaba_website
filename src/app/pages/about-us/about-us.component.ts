import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../profile-card/profile-card.component';
import { TitlePageComponent } from "../../title-page/title-page.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ProfileCardComponent, TitlePageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
