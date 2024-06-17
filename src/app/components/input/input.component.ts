import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() classInput!: string
  @Input() label!: string
  @Input() placeholder!: string
  @Input() disabled!: boolean
  @Input() classInputField!: string

  constructor() { }

  ngOnInit(): void {
  }



}
