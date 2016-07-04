import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-app',
  template: `
    <!-- unnecessary comment just to prove that multiline stirngs can easily be achieved -->
    hello world of {{world}}!
  `,
})
export class HelloWorldAppComponent {
  // the world we live in
  world:string = 'angular 2';
}
