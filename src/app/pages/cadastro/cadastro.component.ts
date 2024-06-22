import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ICadastro } from 'src/app/interfaces/ICadastro';
import { ITasks, Status } from 'src/app/interfaces/ITasks';
import { LoaderService } from 'src/app/services/loader.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
  loading$ = this.loaderService.loading$;
  selectedNodes!: Status;
  nodes: TreeNode<ICadastro[]>[] = [
    { type: "1", label: "Pendente"},
    { type: "2", label: "Em andamento"},
    { type: "3", label: "Concluído"},
  ]
  
  constructor(
    private TaskServices: TasksService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private loaderService: LoaderService
  ) {}

  protected form = this.formBuilder.group({
    title: [''],
    description: [''],
  })

  get isFormValid() {
    return this.selectedNodes != null && this.form.valid
  }

  handleSave() {
    this.loaderService.showLoading()
    
    const forms: ITasks = {
      title: this.form.value.title ?? null,
      description: this.form.value.description ?? null,
      status: this.selectedNodes,
    }

    this.TaskServices.PostTask(forms).subscribe(response => {
      this.handleClear()
      this.loaderService.hideLoading()
      this.router.navigate([""])
    })
    
  }

  handleClear()  {
    this.form.reset()
  }
}
