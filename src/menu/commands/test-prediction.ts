import { GameConfig } from './../../game.config';
import { Game } from '../../game';
import { IMenuCommand } from './menu-command';

export class TestPrediction implements IMenuCommand {

    //------Constructor------//
    
    constructor(private _game: Game) {}
    
    //------Public Methods------//

    public execute(): void {
        this._game.testPrediction();
    }

}