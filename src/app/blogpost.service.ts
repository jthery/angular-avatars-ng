import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listavatar } from './models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  baseUrl = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  // pour récupérer notre List d'avatar grâce à notre service et ce get
  getListavatars(): Observable<Listavatar[]> {
    return this.http.get<Listavatar[]>(`${this.baseUrl}/list-avatars`);
  }

  // pour récupérer notre ID d'avatar grâce à notre service et ce get
  getListavatarsById(id): Observable<Listavatar> {
    return this.http.get<Listavatar>(`${this.baseUrl}/list-avatars/${id}`);
  }

  // delete 1 seul avatar
  deleteSingleAvatar(id: string) {
    return this.http.delete(`${this.baseUrl}/list-avatars/${id}`);
  }

  // delete plusieurs avatars
  deleteAllAvatars(ids: string[]) {
    const allIds = ids.join(',');
    return this.http.delete(`${this.baseUrl}/list-avatars/?ids=${allIds}`);
  }
}
