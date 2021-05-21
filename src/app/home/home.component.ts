import { Component, Inject, OnInit } from '@angular/core';
import { GithubService, GitHubUser } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: GitHubUser[] | null = null;

  constructor(private githubService: GithubService) { }

  async ngOnInit() {
    try {
      this.data = await this.githubService.getUser();
    } catch(error) {
      console.error(error);
    }
  }

}
