import express, { Application} from 'express';

import morgan from 'morgan';



export class App{
    
    private app:Application;

    // this construct the object app and there has the functions usables.

    constructor(private PORT?: number | string){
        this.app=express();
        this.settings();
        this.middlewars();
    }

    // This if for the settings the variables how port and others env.variables.
    settings(){
        this.app.set('port', this.PORT || process.env.PORT || 3000)

    }

    //This is where use the porto for start the program.
    async listen(){
        await this.app.listen(this.app.get('port')); 
        console.log(`http://localhost:${this.app.get('port')}/`);

    }

    middlewars(){
        this.app.use(morgan('dev'));
        
    }
    
}