import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/route";

class App {

    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
    }

    private config(): void{
        // json 데이터 게시
        this.app.use(bodyParser.json());
        // /x-www-form-urlencoded 형태 데이터 지원
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;