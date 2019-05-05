import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listavatar } from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  listAvatar$: Observable<Listavatar[]>;

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.listAvatar$ = this.blogpostService.getListavatars();
  }
}
