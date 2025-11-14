import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from '../../profile-card/profile-card.component';
import { TitlePageComponent } from "../../title-page/title-page.component";
import { Iteam } from '../../core/interfaces/Idata';
import { ProfileCardService } from '../../core/services/profile-card.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ProfileCardComponent, TitlePageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  profilecardSrv= inject(ProfileCardService);
 teamdata:Iteam[]=[]

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(){

    this.profilecardSrv.getTeam().subscribe({
      next:(res)=>{

        this.teamdata=res

      },
      error:(error)=>{
        console.log("error while fecting team info",error)
      }
    })
  }
}
