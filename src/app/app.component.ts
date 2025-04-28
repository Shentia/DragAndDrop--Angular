import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarResizeComponent } from './sidebar-resize/sidebar-resize.component';

@Component({
  selector: 'app-root',
  imports: [SidebarResizeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Drag and Drop Project';
}
