import { Component, Input, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ITasks } from 'src/app/interfaces/itasks';
import { LoaderService } from 'src/app/services/loader.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class PanelComponent implements OnDestroy {
  @Input() tasks: ITasks[] = []
  
  loading$ = this.loaderService.loading$
  
  private destroy$ = new Subject<void>()

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private ServiceTask: TasksService
  ) { }

  onUpdate(task: ITasks) {
    this.router.navigate(["maxprocess", task.id])
  }

  onDelete(id: string) {
    this.loaderService.showLoading()
    
    this.ServiceTask.deleteTask(id).pipe(takeUntil(this.destroy$)).subscribe((task) => {
      this.tasks = this.tasks.filter(task => task.id != id)
      this.loaderService.hideLoading()
    })
  }

  ngOnDestroy () {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
