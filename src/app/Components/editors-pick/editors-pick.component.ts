import { Component, OnInit } from '@angular/core';
import { NewspaperServiceService } from 'src/app/newspaper-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css'],
})
export class EditorsPickComponent implements OnInit {
  editorResult: any = [];
  editorpickpostResult: any = [];
  constructor(private service: NewspaperServiceService) {}

  ngOnInit(): void {
    this.editorspickData();
    this.editorspickPostData();
  }

  editorspickData() {
    this.service.getNews().subscribe((response) => {
      console.log(response, 'editorresult#');
      if (response && response.articles) {
        if (Array.isArray(response.articles)) {
          this.editorResult = response.articles.slice(15, 20);
          console.log(this.editorResult);
        } else {
          this.editorResult = [response.articles];
        }
      } else {
        console.error('invalid response format:results property not found');
      }
    });
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
