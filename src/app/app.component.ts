import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PostsListComponent } from "./posts-list/posts-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-compontent-structure';
  isLoggedIn: boolean = true;
  postTitle: string = 'Post 1 from Parent Component';
  @ViewChild(PostsListComponent) messageFromChild: any;
  childMessage: string = '';
  message: string = '';
  constructor(){
    console.log(this.messageFromChild)
  }

  ngAfterViewInit() {
      console.log(this.messageFromChild)
      this.message = this.messageFromChild.childMessage
  }

  recieveMessage(messageData: string){
    console.log('wow')
    this.childMessage = messageData;
  }
}
