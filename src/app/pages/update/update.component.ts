import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  nodes!: any[];
  selectedNodes: any;
  constructor() { }

  ngOnInit(): void {
  }

}
