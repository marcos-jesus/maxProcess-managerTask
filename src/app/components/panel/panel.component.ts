import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ITasks } from 'src/app/interfaces/itasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class TableComponent implements OnInit {
  isLoading: boolean = false
  tasks$ = new Observable<ITasks[]>()
  constructor(private TaskService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.getTask()
  }

  getTask() {
    this.isLoading = true
    this.tasks$ = this.TaskService.getTasks()
  }

  onUpdate(task: ITasks) {
    this.router.navigate(["maxprocess", task.id])
    console.log("Atualizar task", task)
  }

  onDelete(id: string) {
    console.log("Deletado ID:", id)
  }

}
