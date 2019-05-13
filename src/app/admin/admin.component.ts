import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Listavatar } from '../models/listavatar';
import { ListavatarsService } from '../list-avatars.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // listAvatar$: Observable<Listavatar[]>;
  allListAvatars: Listavatar[];

  constructor(private listavatarsService: ListavatarsService) { }

  ngOnInit() {
    // this.listAvatar$ = this.listavatarsService.getListavatars();
    this.listavatarsService
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
      // this.listavatarsService.deleteSingleAvatar(ids[0]).subscribe(data => console.log(data));
      if (ids.length === 1) {
        this.listavatarsService
          .deleteSingleAvatar(ids[0])
          .subscribe(data => this.refresh(data), err => this.handleError(err));
      } else {
        return this.listavatarsService
        .deleteAllAvatars(ids)
        .subscribe(data => this.refresh(data), err => this.handleError(err));
      }
    }

    // afin de refresh à chaque suppression ou modification d'un avatar
    refresh(data) {
      console.log('data', data);
      this.listavatarsService.getListavatars().subscribe( data => {
        this.allListAvatars = data;
      });
    }

    // fonction pour le retour des erreurs
    handleError(err) {
      console.error(err);
    }
}
