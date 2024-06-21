import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { Observable, of, switchMap } from 'rxjs';
import { ICadastro } from 'src/app/interfaces/icadastro';
import { ITasks, Status } from 'src/app/interfaces/itasks';
import { LoaderService } from 'src/app/services/loader.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  loading$ = this._loaderService.loading$

  nodes: TreeNode<ICadastro[]>[] = [
    { type: "1", label: "Pendente"},
    { type: "2", label: "Em andamento"},
    { type: "3", label: "Concluído"},
  ]

  selectStatus: TreeNode<Status> | null = null;

  protected form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  tasks$ = new Observable<ITasks>()
  
  constructor(
    private _ServiceTask: TasksService, 
    private route: ActivatedRoute, 
    private formBuilder : FormBuilder,
    private _loaderService: LoaderService,

  ) {

    this.getTask()

    this.tasks$.pipe(
      switchMap((task) => {
        return of(task);
      })
    ).subscribe((task) => {
      this.form.patchValue({
        title: task.title,
        description: task.description,
      })

      this.selectStatus = task.status

    })
  }

  getTask() {
    this._loaderService.showLoading()
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.tasks$ = this._ServiceTask.getTask(id)
  }

  updateTask() {
    console.log('form:', this.form.value)
    const id = this.route.snapshot.paramMap.get('id')
  }

}
