import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

    ngOnInit() {
      this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
        {label: 'Cadastro', icon: 'pi pi-user-plus', routerLink: 'maxprocess'}
      ];
    }

}
