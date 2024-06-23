import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  visible!: boolean

  position!: string
  checked: boolean = false
  selectedStatus: string[] = []

  @Output() eventStatusChildren = new EventEmitter<string[]>()

  constructor() {}

  showDialog(position: string) {
    this.position = position
    this.visible = true
  }

  sendSelectStatus() {
    this.eventStatusChildren.emit(this.selectedStatus)
  }
}
