import { bootstrap } from '@angular/platform-browser-dynamic';
import { HelloWorldAppComponent } from './app/';
import { version } from './app/';

console.log('app\'s version is', version);

bootstrap(HelloWorldAppComponent);
