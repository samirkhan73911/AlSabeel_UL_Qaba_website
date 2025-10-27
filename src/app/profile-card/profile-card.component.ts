import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chefcard } from '../core/Idata';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
// router=inject(Router);
//  ensrv=inject(EncryptionService);
  // @Input() cardType: 'menu' | 'popular' | 'chef' | 'blog' = 'menu';
  @Input() carddata!: Chefcard;

  
// itemdetailspage(id:number) {
//   // this.router.navigate(['/productdetailspage',id]);
//      const encid=this.goToDetails(id)
//    this.router.navigate(['/productdetailspage', encid]);
// }
// blogdetailspage(id:number) {
//   // this.router.navigate(['/blogsdetailspage',id]);
//    const encid=this.goToDetails(id)
//    this.router.navigate(['/blogsdetailspage', encid]);
// }

//     goToDetails(id: number) {
//   const encryptedId = encodeURIComponent(this.ensrv.encrypt(id.toString()));
//   return encryptedId
//   // this.router.navigate(['/blogsdetailspage', encryptedId]);
// }

}
