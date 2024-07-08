import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { IPost } from '../../models/ipost';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';
import { Comment } from '../../models/comment';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  commentForm: FormGroup;
  @Input() post: IPost = {} as IPost;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  addComment() {
    console.log(this.commentForm.value.comment);
    if (this.commentForm.valid) {
      this.http
        .post<{ comment: Comment }>(
          `${environment.apiUrl}/api/Post/${this.post.id}/comment`,
          {
            text: this.commentForm.value.comment,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .subscribe((data) => {
          console.log(data);
        });
      this.commentForm.reset();
    }
  }
}
