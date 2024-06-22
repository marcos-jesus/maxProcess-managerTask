import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  visible!: boolean;

  position!: string;
  checked: boolean = false
  selectedStatus: string[] = []

  @Output() eventStatusChildren = new EventEmitter<string[]>()

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {}

  showDialog(position: string) {
    this.position = position
    this.visible = true
  }

  sendSelectStatus() {
    console.log("Mudou ?")
    this.eventStatusChildren.emit(this.selectedStatus)
  }
}
