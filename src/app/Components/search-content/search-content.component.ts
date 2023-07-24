import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css'],
})
export class SearchContentComponent {
  @Input() articles: any[] = [];
  @Input() searchQuery: string = '';
}
