import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { FollowerComponent } from './components/follower/follower.component';
import { PostComponent } from './components/post/post.component';
import { PostRepository } from './repository/post.repository';
import { StaticDataSource } from './model/static.datasource';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRepository } from './repository/user.repository';
import { FollowersRepository } from './repository/follower.repository';
import { RouterModule } from '@angular/router';
import { PostService } from './service/post.service';
import { UserService } from './service/user.service';
import { FollowerService } from './service/follower.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailsComponent } from './components/post-details/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    FollowerComponent,
    PostComponent,
    PostFormComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [PostService, UserService, FollowerService, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
