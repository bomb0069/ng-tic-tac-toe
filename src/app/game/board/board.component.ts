import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid/grid';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  grids: Grid[][] = [ [new Grid(),new Grid(),new Grid()],
                      [new Grid(),new Grid(),new Grid()],
                      [new Grid(),new Grid(),new Grid()]];
  constructor() { }

  ngOnInit() {
  }

}
