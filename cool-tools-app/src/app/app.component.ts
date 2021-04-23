import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cool-tools-app';
  showProgress = false

  openProgress() {
    this.showProgress = true
  
    setTimeout(_ => this.showProgress = false, 3000)
  }
}
