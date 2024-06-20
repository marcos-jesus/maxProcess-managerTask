import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/interfaces/itasks';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks!: ITasks[];
  rows = 4;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.loadTasks(1, this.rows);
  }

  onPageChange(event: any) {
    const currentPage = event.page + 1;
    const rows = event.rows;
    this.loadTasks(currentPage, rows);
  }

  loadTasks(page: number, limit: number) {
    this.tasksService.getTasksPaginated(page, limit).subscribe(task => this.tasks = task );
  }
 
}
