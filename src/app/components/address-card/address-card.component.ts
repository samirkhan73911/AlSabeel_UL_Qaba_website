import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  standalone: true,
  imports: [],
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {

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
