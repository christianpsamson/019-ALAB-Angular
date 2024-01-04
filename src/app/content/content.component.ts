import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentViewComponent } from '../content-view/content-view.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavbarComponent, ContentViewComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
