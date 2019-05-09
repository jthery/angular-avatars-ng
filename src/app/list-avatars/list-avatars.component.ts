import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listavatar } from '../models/listavatar';
import { ListavatarsService } from '../list-avatars.service';

@Component({
  selector: 'app-list-avatars',
  templateUrl: './list-avatars.component.html',
  styleUrls: ['./list-avatars.component.css']
})
export class ListAvatarsComponent implements OnInit {

  listAvatar$: Observable<Listavatar[]>;

  constructor(private blogpostService: ListavatarsService) { }

  ngOnInit() {
    this.listAvatar$ = this.blogpostService.getListavatars();
  }
}
