import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';

@Component({
  selector: 'app-editors-pick-card',
  templateUrl: './editors-pick-card.component.html',
  styleUrls: ['./editors-pick-card.component.css'],
})
export class EditorsPickCardComponent implements OnInit {
  editorpickpostResult: any = [];
  constructor(private service: NewspaperServiceService) {}
  ngOnInit(): void {
    this.editorspickPostData();
  }

  editorspickPostData() {
    this.service.getNews().subscribe((response) => {
      console.log(response, 'editorpickpostresult#');
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.editorpickpostResult = response.articles.slice(19);
          console.log(this.editorpickpostResult);
        } else {
          this.editorpickpostResult = [response.articles];
        }
      } else {
        console.error('invalid response format:results property not found');
      }
    });
  }
}
