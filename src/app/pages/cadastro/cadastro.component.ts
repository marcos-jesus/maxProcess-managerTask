import { Component, OnDestroy } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { TreeNode } from 'primeng/api'
import { ICadastro } from 'src/app/interfaces/icadastro'
import { ITasks, Status } from 'src/app/interfaces/itasks'
import { LoaderService } from 'src/app/services/loader.service'
import { TasksService } from 'src/app/services/tasks.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnDestroy {
  private subscription: Subscription = new Subscription()
  loading$ = this._loaderService.loading$

  selectedNodes!: Status
  nodes: TreeNode<ICadastro[]>[] = [
    { type: '1', label: 'Pendente' },
    { type: '2', label: 'Em Progresso' },
    { type: '3', label: 'Concluído' },
  ]

  constructor(
    private _ServiceTask: TasksService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _loaderService: LoaderService,
  ) {}

  protected form = this.formBuilder.group({
    title: [''],
    description: [''],
  })

  get isFormValid() {
    return this.selectedNodes != null && this.form.valid
  }

  handleSave() {
    this._loaderService.showLoading()

    const forms: ITasks = {
      title: this.form.value.title ?? null,
      description: this.form.value.description ?? null,
      status: this.selectedNodes,
    }

    this.subscription.add(
      this._ServiceTask.PostTask(forms).subscribe((_) => {
        this.handleClear()
        this._loaderService.hideLoading()
        this.router.navigate([''])
      })
    )
  }

  handleClear() {
    this.form.reset()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
