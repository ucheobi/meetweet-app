import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { FollowerComponent } from './components/friends/friends.component';
import { PostComponent } from './components/post/post.component';
import { StaticDataSource } from './model/static.datasource';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostService } from './service/post.service';
import { UserService } from './service/user.service';
import { FriendsService } from './service/friends.service';
import { PostFormComponent } from './components/post-form/post-form.component';
//import { PostDetailsComponent } from './components/post-details/post-details/post-details.component';
import { ApiDataSource } from './model/api.datasource';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './service/authservice.service';

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
//    PostDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ChatModule,
  ],
  providers: [PostService, UserService, FriendsService, AuthService, 
    { provide: StaticDataSource, useClass: ApiDataSource }],
  bootstrap: [AppComponent]
})
export class AppModule { }
