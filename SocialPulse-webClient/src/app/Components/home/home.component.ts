import { Component } from '@angular/core';
import { IPost } from '../../models/ipost';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  post: IPost[] = [
    {
      id: 1,
      userName: 'John Doe',
      content: 'This is a post content',
      filePath: 'assets/images/image.jpg',
      createdDate: new Date(),
      comments: [],
    },
    {
      id: 2,
      userName: 'Jane Doe',
      content: 'This is a post content',
      filePath: 'assets/images/image.jpg',
      createdDate: new Date(),
      comments: [],
    },
    {
      id: 3,
      userName: 'John Smith',
      content: 'This is a post content',
      filePath: 'assets/images/image.jpg',
      createdDate: new Date(),
      comments: [],
    },
    {
      id: 4,
      userName: 'Jane Smith',
      content: 'This is a post content',
      filePath: 'assets/images/image.jpg',
      createdDate: new Date(),
      comments: [],
    },
  ];
  constructor() {}
}
