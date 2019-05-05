import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Listavatar } from '../models/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  // correspond à l'utilisation de notre service poir notre getListavatar
  listavatar$: Observable<Listavatar>;
  listavatar: Listavatar;

// afin de récupérer notre ID, on doit utiliser l'instance que angular fournis "ActivatedRoute"
  constructor(private activatedRoute: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {
    // activatedRoute mets à dispostion snapshot qui mets à disposition snapshot paramMap et le get récupère l'id (qui correspond à /:id)
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // utilisation de notre service
    this.listavatar$ = this.blogpostService.getListavatarsById(id);
  }

}
