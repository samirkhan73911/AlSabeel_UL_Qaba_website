import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Iteam } from '../core/interfaces/Idata';
import { ProfileCardService } from '../core/services/profile-card.service';
import { error } from 'node:console';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

// router=inject(Router);
 
  // @Input() cardType: 'menu' | 'popular' | 'chef' | 'blog' = 'menu';
  @Input() carddata!: Iteam;

 
  
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
