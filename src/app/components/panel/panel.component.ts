import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';
import { ITasks } from 'src/app/interfaces/itasks';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class PanelComponent {
  loading$ = this.loaderService.loading$;
  @Input() tasks: ITasks[] = [];

  constructor(
    private router: Router, 
    private loaderService: LoaderService,
  ) { }

  onUpdate(task: ITasks) {
    this.router.navigate(["maxprocess", task.id])
  }

}
