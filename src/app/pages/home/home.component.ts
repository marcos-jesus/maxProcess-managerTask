import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/interfaces/ITasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks!: ITasks[];
  rows = 6;
  totalItens!: number;

  constructor(private tasksService: TasksService) { 
    this.tasksService.getTasks().subscribe(task => this.totalItens = task.length)
  }

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
