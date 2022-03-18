import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full'},
  { path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  { path:'about' , canActivate:[AuthGuard] , component:AboutComponent},
  { path:'gallery' , canActivate:[AuthGuard] , component:GalleryComponent},
  { path:'movies' , canActivate:[AuthGuard] , component:MoviesComponent},
  { path:'tv' , canActivate:[AuthGuard] , component:TvComponent},
  { path:'contacts' , canActivate:[AuthGuard] , component:ContactsComponent},
  { path:'settings' , loadChildren:() => import('./settings/settings.module').then(x => x.SettingsModule)},
  { path:'moviedetails/:id' , canActivate:[AuthGuard] , component:MoviedetailsComponent},

  { path:'register' , component:RegisterComponent},
  { path:'login' , component:LoginComponent},
  { path:'notfound' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
