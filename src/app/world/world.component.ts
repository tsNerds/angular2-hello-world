import {Component, Input} from '@angular/core';
import {World} from './World';

@Component({
  moduleId: module.id,
  selector: 'world',
  template: `
    <span [style.color]="world.color">{{world.name}}</span>
  `
})
export class WorldComponent {
    @Input() world:World;
}