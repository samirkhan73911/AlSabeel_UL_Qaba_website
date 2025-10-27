import { Component, Input } from '@angular/core';
import { AddressCardComponent } from '../../components/address-card/address-card.component';
import { TitlePageComponent } from '../../title-page/title-page.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AddressCardComponent,TitlePageComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  @Input() type: 'social' | 'simple'='simple';
  @Input() adressdata: {
    title: string;
    iconurl: string;
    carddata: string;
  } = {
    title: '',
    iconurl: '',
    carddata: '',
  };
}
