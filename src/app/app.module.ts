import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WithModalComponent } from './with-modal/with-modal.component';
import { WithoutModalComponent } from './without-modal/without-modal.component';
import {RouterModule, Routes} from '@angular/router';
import { ExampleModalComponent } from './example-modal/example-modal.component';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {MessagingService} from './messaging.service';

const routes: Routes = [
  { path: 'app-with-modal', component: WithModalComponent },
  { path: 'app-without-modal', component: WithoutModalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WithModalComponent,
    WithoutModalComponent,
    ExampleModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
