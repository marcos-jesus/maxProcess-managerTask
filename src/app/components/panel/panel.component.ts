import { Component, Input, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { Subject, Subscription, takeUntil } from 'rxjs'
import { ITasks } from 'src/app/interfaces/itasks'
import { LoaderService } from 'src/app/services/loader.service'
import { TasksService } from 'src/app/services/tasks.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnDestroy {
  private subscription: Subscription = new Subscription()
  
  loading$ = this._loaderService.loading$

  @Input() tasks: ITasks[] = []

  constructor(
    private router: Router,
    private _loaderService: LoaderService,
    private _ServiceTask: TasksService,
  ) {}

  onUpdate(task: ITasks) {
    this.router.navigate(['maxprocess', task.id])
  }

  onDelete(id: string) {
    this._loaderService.showLoading()

    this.subscription.add(
      this._ServiceTask.deleteTask(id)
      .subscribe((_) => {
        this._loaderService.hideLoading()
        this._ServiceTask.getTasks().subscribe(task => this.tasks = task)
      })
    )
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
