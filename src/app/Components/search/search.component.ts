import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  searchNews() {
    // Arama butonuna tıklandığında, arama sorgusunu diğer bileşene iletir
    this.searchEvent.emit(this.searchQuery);
  }
  onSearchButtonClick() {
    this.searchNews(); // Butona tıklandığında searchNews fonksiyonunu çağırın
  }
}
