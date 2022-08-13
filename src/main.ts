import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DevShellModule} from "./app/dev-shell/dev-shell.module";

platformBrowserDynamic().bootstrapModule(DevShellModule)
  .catch(err => console.error(err));
