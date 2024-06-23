import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { HomeComponent } from './pages/home/home.component'
import { UpdateComponent } from './pages/update/update.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maxprocess', component: CadastroComponent },
  { path: 'maxprocess/:id', component: UpdateComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
