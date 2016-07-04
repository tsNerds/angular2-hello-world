import { Component } from '@angular/core';
import { World } from './World';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})
export class HelloWorldAppComponent {
  worlds:World[] = [
    new World('beautiful world', '#33cda4'),
    new World('super mario world', '#ff9900'),
    new World('minecraft world', '#ccc'),
  ]
}
