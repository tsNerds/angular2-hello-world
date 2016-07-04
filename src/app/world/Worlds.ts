import {Injectable} from '@angular/core';

@Injectable()
export class Worlds {
    getWorlds() {
        return  [
            {
                name: 'beautiful world',
                color: 'cyan'
            },
            {
                name: 'super mario world',
                color: '#ff9900'
            },
            {
                name: 'minecraft world',
                color: '#ccc'
            }
        ];
    }
}