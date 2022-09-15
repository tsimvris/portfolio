import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  title = this.router.url;
  id = this.activatedRoute.snapshot.paramMap;
}
