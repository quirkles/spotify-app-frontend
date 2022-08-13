import { NgModule } from '@angular/core';
import {AppModule} from "../app.module";
import { DevShellComponent } from './dev-shell.component';
import {DevShellRoutingModule} from "./dev-shell-routing.module";
import { EditableComponent } from './wrappers/editable/editable.component';
import { WrappersComponent } from './wrappers/wrappers.component';



@NgModule({
  declarations: [
    DevShellComponent,
    EditableComponent,
    WrappersComponent
  ],
  imports: [
    AppModule,
    DevShellRoutingModule
  ],
  bootstrap: [DevShellComponent]
})
export class DevShellModule { }
