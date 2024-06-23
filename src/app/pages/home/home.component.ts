import { Component, OnInit } from '@angular/core'
import { ITasks } from 'src/app/interfaces/itasks'
import { TasksService } from 'src/app/services/tasks.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks!: ITasks[]
  filteredTasks!: ITasks[]
  rows = 6
  totalItens!: number

  eventStatusFather: string[] = []

  constructor(private _ServiceTask: TasksService) {
    this._ServiceTask
      .getTasks()
      .subscribe((task) => (this.totalItens = task.length))
  }

  ngOnInit(): void {
    this.loadTasks('desc', 1, this.rows)
  }

  onPageChange(event: any) {
    const currentPage = event.page + 1
    const rows = event.rows
    this.loadTasks('desc', currentPage, rows)
  }

  loadTasks(order: string, page: number, limit: number) {
    this._ServiceTask
      .getTasksPaginated(order, page, limit)
      .subscribe((task) => (this.tasks = task))
  }

  applyFilter() {
    if (this.eventStatusFather && this.eventStatusFather.length > 0) {
      this.filteredTasks = this.tasks.filter((task) =>
        this.eventStatusFather.includes(task.status.type ?? ''),
      )
    } else {
      this.filteredTasks = this.tasks
    }
  }

  eventStatus(event: string[]) {
    this.eventStatusFather = event
    this.applyFilter()
  }
}
