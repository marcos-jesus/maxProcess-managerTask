import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { ButtonModule } from 'primeng/button'
import { TabMenuModule } from 'primeng/tabmenu'
import { TableModule } from 'primeng/table'
import { PanelModule } from 'primeng/panel'
import { CardModule } from 'primeng/card'
import { PaginatorModule } from 'primeng/paginator'
import { TagModule } from 'primeng/tag'
import { DialogModule } from 'primeng/dialog'
import { CheckboxModule } from 'primeng/checkbox'

import { MenuComponent } from './components/menu/menu.component'
import { PanelComponent } from './components/panel/panel.component'
import { FilterComponent } from './components/filter/filter.component'
import { InputTextModule } from 'primeng/inputtext'
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { HomeComponent } from './pages/home/home.component'
import { KeyFilterModule } from 'primeng/keyfilter'
import { TreeSelectModule } from 'primeng/treeselect'
import { UpdateComponent } from './pages/update/update.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component'

import { LoaderService } from './services/loader.service'
import { LoaderInterceptor } from './services/loader.interceptor';
import { DateBRPipe } from './pipes/date-br.pipe'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PanelComponent,
    FilterComponent,
    CadastroComponent,
    HomeComponent,
    UpdateComponent,
    LoadingOverlayComponent,
    DateBRPipe,
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
    DialogModule,
    CheckboxModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
