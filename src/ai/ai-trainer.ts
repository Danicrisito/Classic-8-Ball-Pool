import { IAIConfig, IStickConfig } from './../game.config.type';
import { Vector2 } from './../geom/vector2';
import { GameConfig } from './../game.config';
import { GameWorld } from './../game-objects/game-world';
import { AIOpponent } from './ai-opponent';
import { AIPolicy } from './ai-policy';
import cloneDeep = require('lodash/cloneDeep');
import { Mouse } from '../input/mouse';

const aiConfig: IAIConfig = GameConfig.ai;
const stickConfig: IStickConfig = GameConfig.stick;

export interface ShotConfigurationDto{
    power:number,
    rotation:number
}


export class AITrainer {

    private _policy: AIPolicy;
    private _opponents: AIOpponent[];
    private _currentOpponent: AIOpponent;
    private _initialGameWorld: GameWorld;
    private _gameWorld: GameWorld;
    private _iteration: number = 0;
    private _finishedSession: boolean = true;
    private _bestOpponent: AIOpponent;
    private _soundOnState: boolean;

    public get finishedSession() : boolean {
        return this._finishedSession;
    }

    constructor() {
        this._policy = new AIPolicy();
    }

    private placeBallInHand(gameWorld: GameWorld): void {

        let marginX = 5;
        let pos = Vector2.copy(GameConfig.cueBallPosition);

        while(!gameWorld.isValidPosToPlaceCueBall(pos)) {
            pos.addToX(marginX);
        }

        gameWorld.placeBallInHand(pos);
    }

    private init(): void {
        this._opponents = [];
        this._currentOpponent = this.createRandomOpponent();
        this._bestOpponent = this._currentOpponent;
        this._iteration = 0;
    }

    private createMutation(opponent: AIOpponent): AIOpponent {
        let newPower = opponent.power;
        newPower += (Math.random() * 2 * aiConfig.shotPowerMutationVariance) - aiConfig.shotPowerMutationVariance;
        newPower = newPower < aiConfig.minShotPower ? aiConfig.minShotPower : newPower;
        newPower = newPower > stickConfig.maxPower ? stickConfig.maxPower : newPower;
    
        let newRotation = opponent.rotation;
    
        if(opponent.evaluation > 0){
            newRotation += (1 / opponent.evaluation)*(Math.random() * 2 * Math.PI - Math.PI)
        }
        else{
            newRotation = (Math.random() * 2 * Math.PI - Math.PI);
        }

        return new AIOpponent(newPower, newRotation);
    }

    private createRandomOpponent(): AIOpponent {
        const power: number = (Math.random() * 75 + 1);
        const rotation: number = (Math.random() * 2 * Math.PI);

        return new AIOpponent(power, rotation);
    }

    private train(): ShotConfigurationDto  {

        if(this._iteration === aiConfig.trainIterations){
            GameConfig.soundOn = this._soundOnState;
            this.playTurn();
            this._finishedSession = true;
            const shot_configuration : ShotConfigurationDto = {
                power: this._bestOpponent.power,
                rotation :this._bestOpponent.rotation
            }
            return shot_configuration;
        }

        if(this._gameWorld.isBallsMoving) return;
        this._gameWorld.concludeTurn();

        this._currentOpponent.evaluation = this._policy.evaluate(this._gameWorld);

        const current: AIOpponent = new AIOpponent(
            this._currentOpponent.power,
            this._currentOpponent.rotation,
            this._currentOpponent.evaluation);

        this._opponents.push(current);

        if(current.evaluation > this._bestOpponent.evaluation){
            this._bestOpponent = current;
        }

        this._gameWorld = cloneDeep(this._initialGameWorld);
        this._currentOpponent = this.buildNewOpponent();
        this._iteration++;
        this.simulate();
    }

    public buildNewOpponent(): AIOpponent {
        if(this._iteration % 10 === 0){
            return this.createRandomOpponent();
        }
        else {
            return this.createMutation(this._bestOpponent);
        }    
    }

    public playTurn(): void {
        this._initialGameWorld.shootCueBall(this._bestOpponent.power, this._bestOpponent.rotation);
    }

    public playTurnWithInput(power:number, rotation:number){
        this._initialGameWorld.shootCueBall(power, rotation);

    }

    public simulate(): void {
        this._gameWorld.shootCueBall(this._currentOpponent.power, this._currentOpponent.rotation);
    }

    public opponentTrainingLoop(): ShotConfigurationDto {
        let shot_config ;
        while(!this._finishedSession){
            shot_config = this.train();
            this._gameWorld.update();
        }

        Mouse.reset();
        return shot_config;

    }

    public startSession(gameWorld: GameWorld): ShotConfigurationDto {
        this._soundOnState = GameConfig.soundOn;
        GameConfig.soundOn = false;
        if(gameWorld.isBallInHand) {
            this.placeBallInHand(gameWorld);
        }
        this._initialGameWorld = gameWorld;
        this._gameWorld = cloneDeep(gameWorld);
        this.init();
        this._finishedSession = false;
        this.simulate();
        return this.opponentTrainingLoop();
    }


    public startSessionBestShots(gameWorld: GameWorld , shot_config:ShotConfigurationDto){
        this._soundOnState = GameConfig.soundOn;
        GameConfig.soundOn = false;
        this.placeBallInHand(gameWorld);
        this.playTurnWithInput(shot_config.power, shot_config.rotation);
        this._gameWorld.update();
    }

    public testPrediction(gameWorld: GameWorld , shot_config: ShotConfigurationDto){
        this._soundOnState = GameConfig.soundOn;
        GameConfig.soundOn = false;
        this.placeBallInHand(gameWorld);
        this.playTurnWithInput(shot_config.power, shot_config.rotation);
        this._gameWorld.update();
    }
}

export const AI = new AITrainer();