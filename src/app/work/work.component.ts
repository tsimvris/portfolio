import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private router: Router) {}
  notEditedTitle = this.router.url;
  title = this.notEditedTitle.slice(1).toUpperCase();

  ngOnInit(): void {
  }

}
