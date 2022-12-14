import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "activePosts",
        component: ActivePostComponent
    },
    {
        path: "inactivePosts",
        component: InactivePostComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
