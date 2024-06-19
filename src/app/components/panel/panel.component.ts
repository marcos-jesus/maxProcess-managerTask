import { ChangeDetectorRef,Component } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ITasks } from 'src/app/interfaces/itasks';
import { LoaderService } from 'src/app/services/loader.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class PanelComponent {
  loading$ = this.loaderService.loading$;
  tasks$ = new Observable<ITasks[]>()
  constructor(
    private TaskService: TasksService, 
    private router: Router, 
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getTask()
  }

  getTask() { 

    this.loaderService.showLoading();
    this.tasks$ = this.TaskService.getTasks()

    console.log("meu loader", this.loading$)
  }

  onUpdate(task: ITasks) {
    this.router.navigate(["maxprocess", task.id])
    console.log("Atualizar task", task)
  }

  onDelete(id: string) {
    console.log("Deletado ID:", id)
  }

}
