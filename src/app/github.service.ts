import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GitHubUser {
  login: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient, @Inject('githubUrl') private githubUrl: string) {

  }

  getUser(): Promise<GitHubUser[]> {
    return this.http
               .get<GitHubUser[]>(this.githubUrl)
               .toPromise();
  }

}
