import {Request, Response} from "express";

export class Routes {       
    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: '/request!'
            })
        })
        
        app.route('/contact')
        .get((req: Request, res: Response) => {      
            res.status(200).send({ 
                message: '/contanct request!' 
            }) 
        })
        .post((req: Request, res: Response) => {     
            res.status(200).send({
                message: '/contact POST request!'
            })
        })
    }
}
