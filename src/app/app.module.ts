import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import { TagModule } from 'primeng/tag';

import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/panel/panel.component';
import { FilterComponent } from './components/filter/filter.component';
import {InputTextModule} from 'primeng/inputtext';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import { InputComponent } from './components/input/input.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { UpdateComponent } from './pages/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    FilterComponent,
    CadastroComponent,
    HomeComponent,
    InputComponent,
    UpdateComponent,
    LoadingOverlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    PanelModule,
    CardModule,
    PaginatorModule,
    TagModule,
    InputTextModule,
    KeyFilterModule,
    TreeSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
