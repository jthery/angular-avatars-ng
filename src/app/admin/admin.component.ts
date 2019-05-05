import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Listavatar } from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // listAvatar$: Observable<Listavatar[]>;
  allListAvatars: Listavatar[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    // this.listAvatar$ = this.blogpostService.getListavatars();
    this.blogpostService
      .getListavatars()
      .subscribe(data => this.refresh(data)
      //   {
      //   console.log(data);
      //   this.allListAvatars = data;
      // }
      );
    }

    // permet de supprimer plusieurs IDs
    // ce qui est commenté permet de supprimer un seul id
    deleteAvatars(selectedOptions) {
      const ids = selectedOptions.map(so => so.value);
      // this.blogpostService.deleteSingleAvatar(ids[0]).subscribe(data => console.log(data));
      if (ids.length === 1) {
        this.blogpostService
          .deleteSingleAvatar(ids[0])
          .subscribe(data => this.refresh(data), err => console.error(err));
      } else {
        return this.blogpostService.deleteAllAvatars(ids).subscribe(data => this.refresh(data), err => console.error(err));
      }
    }

    // afin de refresh à chaque suppression ou modification d'un avatar
    refresh(data) {
      console.log('data', data);
      this.blogpostService.getListavatars().subscribe( data => {
        this.allListAvatars = data;
      });
    }
}
