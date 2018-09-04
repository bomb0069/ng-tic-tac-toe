import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  status: string = ' ';

  constructor() { }

  ngOnInit() {
  }

  onClick(clickOn: string) {
    this.status = clickOn;
  }

}
