import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "../app.component";
import {EditableComponent} from "./wrappers/editable/editable.component";
import {WrappersComponent} from "./wrappers/wrappers.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'wrappers',
    component: WrappersComponent,
    children: [
      {
        path: 'editable',
        component: EditableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DevShellRoutingModule {}
