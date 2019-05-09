import { Component, OnInit } from '@angular/core';
import { ListavatarsService } from '../list-avatars.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Listavatar } from '../models/listavatar';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  // correspond à l'utilisation de notre service poir notre getListavatar
  listavatar$: Observable<Listavatar>;
  listavatar: Listavatar;

// afin de récupérer notre ID, on doit utiliser l'instance que angular fournis "ActivatedRoute"
  constructor(private activatedRoute: ActivatedRoute, private blogpostService: ListavatarsService) { }

  ngOnInit() {
    // activatedRoute mets à dispostion snapshot qui mets à disposition snapshot paramMap et le get récupère l'id (qui correspond à /:id)
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // utilisation de notre service
    this.listavatar$ = this.blogpostService.getListavatarsById(id);
  }

}
