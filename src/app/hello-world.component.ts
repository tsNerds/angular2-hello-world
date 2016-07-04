import { Component } from '@angular/core';
import { World, Worlds, WorldComponent } from './world/index';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css'],
  providers: [Worlds],
  directives: [WorldComponent]
})
export class HelloWorldAppComponent {
  private worlds: World[];

  constructor(wordlsProvider:Worlds) {
    this.setWorlds(wordlsProvider.getWorlds())
  }
  
  setWorlds(worldsData) {
    this.worlds = worldsData.map(
      data => new World(data.name, data.color)
    );
  }
}