import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { ITasks, Status } from 'src/app/interfaces/itasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  nodes: Status[] = [
    {type: 1, title: 'Pendente'},
    {type: 2, title: 'Em andamento'},
    {type:3, title: 'Concluída'}
  ]

  selectedNodes = new FormControl()

  protected form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', [Validators.required]]
  })
  
  tasks$ = new Observable<ITasks>()
  
  constructor(
    private _ServiceTask: TasksService, 
    private route: ActivatedRoute, 
    private formBuilder : FormBuilder

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
        status: task.status.title
      })
    })
  }

  getTask() {
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.tasks$ = this._ServiceTask.getTask(id)
  }

  updateTask() {
    this.form.setValue({
      
    })
    console.log('form:', this.form)
  }

}
