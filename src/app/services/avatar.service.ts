import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvaturnHead } from '@avaturn-live/web-sdk';
import { from, switchMap } from 'rxjs';

type SessionData = {
  session_id: string;
  token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  avatar: AvaturnHead | null = null;
  constructor(private http: HttpClient) {}

  initSession(node: HTMLElement) {
    return this.http
      .post<SessionData>('http://localhost:3000/api/session/new', null)
      .pipe(
        switchMap((data) => {
          this.avatar = new AvaturnHead(node, {
            sessionToken: data.token,
          });
          return from(this.avatar.init());
        }),
      );
  }
}
