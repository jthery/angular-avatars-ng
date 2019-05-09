import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAvatarsComponent } from './list-avatars/list-avatars.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ListAvatarsComponent },
  { path: 'list-avatars', component: ListAvatarsComponent },
  { path: 'list-avatars/:id', component: AvatarComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
