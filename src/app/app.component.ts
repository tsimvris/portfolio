import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title:string;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,) {
    router.events.subscribe((val) => {
    });

    if(this.router.url == "/") {
      this.title = "Home"

    }else{
      this.title = this.router.url.slice(1);
      console.log(this.title)
      console.log(this.router.url)



    }
  };
  ngOnInit(): void {

  }
}
