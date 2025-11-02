import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UmrahComponent } from './pages/umrah/umrah.component';
import { HajjComponent } from './pages/hajj/hajj.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
       component:HomeComponent
    },
    {
        path:"umarh",
       component:UmrahComponent
    },
    {
        path:"hajj",
       component:HajjComponent
    },
    {
        path:"contactUs",
       component:ContactUsComponent
    },
    {
        path:"gallery",
       component:GalleryComponent
    },
    {
        path:"aboutUs",
       component:AboutUsComponent
    },
    // {
    //     path:"**",
    //    component:HomeComponent
    // },
    
];
