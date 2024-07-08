import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/ipost';
import { PostComponent } from '../post/post.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';
import { AuthServiceService } from '../../Services/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private http: HttpClient, private auth: AuthServiceService) {}
  ngOnInit(): void {
    if (this.auth.currentUserSig) {
      this.http
        .get<IPost[]>(`${environment.apiUrl}/api/NewsFeed`)
        .subscribe((data) => {
          this.posts = data;
        });
    }
  }
}
