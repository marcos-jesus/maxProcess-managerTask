import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasks } from 'src/app/interfaces/itasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class TableComponent implements OnInit {

  tasks$ = new Observable<ITasks[]>()
  constructor(private TaskService: TasksService) { }

  ngOnInit(): void {
    this.getTask()
  }

  getTask() {
    this.tasks$ = this.TaskService.getTasks()
  }

  onUpdate(task: ITasks) {
    console.log("Atualizar task", task)
  }

  onDelete(id: string) {
    console.log("Deletado ID:", id)
  }

}
