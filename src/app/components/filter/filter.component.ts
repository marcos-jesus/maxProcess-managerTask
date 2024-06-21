import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  visible!: boolean;

  position!: string;
  checked: boolean = false
  selectedCities: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

    showDialog(position: string) {
      this.position = position;
      this.visible = true;
    }
    

}
