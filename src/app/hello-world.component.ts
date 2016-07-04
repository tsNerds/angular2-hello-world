import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})
export class HelloWorldAppComponent {
  worlds:any[] = [
    'beautiful world',
    'super mario world',
    'minecraft world'
  ];
}
