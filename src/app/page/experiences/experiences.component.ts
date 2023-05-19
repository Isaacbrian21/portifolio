import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id: string = "console";

  changeView(id: string) {
    this.id = id;
  }
}
