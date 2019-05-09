import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listavatar } from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-list-avatars',
  templateUrl: './list-avatars.component.html',
  styleUrls: ['./list-avatars.component.css']
})
export class ListAvatarsComponent implements OnInit {

  listAvatar$: Observable<Listavatar[]>;

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.listAvatar$ = this.blogpostService.getListavatars();
  }
}
