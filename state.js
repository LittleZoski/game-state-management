export const states ={
    //enum object 
    STANDING__LEFT : 0, 
    STANDING_RIGHT : 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3, 
    RUNNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
} 

class state{
    constructor(state){
        this.state = state;
    }
}

//extends create child class 
export class StandingLeft extends state {
    constructor(player){
        super('STANDING left');
        this.player = player;
    }
    
    //the enter method will execute everything need to be done when player enter current state, 
    //enter() method will only execute once when standing left state is entered.
    enter(){
        this.player.frameY=1;
        this.player.speed=0;
    }
    //handleInput method will listen for a predefined set of input and swap to a different 
    //state when the correct key is pressed, handleInput will run over and over for each animation frame
    handleInput(input){
        if(input==='PRESS right') this.player.setState(states.STANDING_RIGHT);//set state to standing left
        else if(input==='PRESS down') this.player.setState(states.SITTING_LEFT);
        else if(input==='PRESS left') this.player.setState(states.RUNNNING_LEFT);
    }
}

export class StandingRight extends state {
    constructor(player){
        super('STANDING right');
        this.player = player;
    }
    enter(){
        this.player.frameY = 0;
        this.player.speed=0;
    }
    handleInput(input){
        if(input==='PRESS left') this.player.setState(states.STANDING__LEFT);//set state to standing right when player is currently in standing right state
        else if(input==='PRESS down') this.player.setState(states.SITTING_RIGHT);
        else if(input==='PRESS right') this.player.setState(states.RUNNING_RIGHT);
    }
}

export class SittingLeft extends state {
    constructor(player){
        super('SITTING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 9;
        this.player.speed=0;
    }
    handleInput(input){
        if(input==='PRESS right') this.player.setState(states.SITTING_RIGHT);
        else if(input==='PRESS up') this.player.setState(states.STANDING__LEFT);
        else if(input==='RELEASE down') this.player.setState(states.STANDING__LEFT);        
    }
}

export class SittingRight extends state {
    constructor(player){
        super('SITTING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 8;
        this.player.speed=0;
    }
    handleInput(input){
        if(input==='PRESS left') this.player.setState(states.SITTING_LEFT);
        else if(input==='PRESS up') this.player.setState(states.STANDING_RIGHT);
        else if(input==='RELEASE down') this.player.setState(states.STANDING_RIGHT);
    }
}

export class RunningLeft extends state {
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 7;
        this.player.speed = -this.player.maxSpeed;
    }
    handleInput(input){
        if(input==='PRESS right') this.player.setState(states.RUNNING_RIGHT);
        else if(input==='RELEASE left') this.player.setState(states.STANDING__LEFT);
        else if(input==='PRESS down') this.player.setState(states.SITTING_LEFT);
    }
}

export class RunningRight extends state {
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameY = 6;
        this.player.speed = this.player.maxSpeed;
    }
    handleInput(input){
        if(input==='PRESS LEFT') this.player.setState(states.RunningLeft);
        else if(input==='RELEASE right') this.player.setState(states.STANDING_RIGHT);
        else if(input==='PRESS down') this.player.setState(states.SITTING_RIGHT);
    }
}