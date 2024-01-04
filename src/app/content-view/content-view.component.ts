import { Component } from '@angular/core';
import { ContentDescComponent } from '../content-desc/content-desc.component';
import { ContentImageComponent } from '../content-image/content-image.component';

@Component({
  selector: 'app-content-view',
  standalone: true,
  imports: [ContentImageComponent, ContentDescComponent],
  templateUrl: './content-view.component.html',
  styleUrl: './content-view.component.css',
})
export class ContentViewComponent {}
