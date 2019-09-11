import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
