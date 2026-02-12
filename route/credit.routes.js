import { UpdateCredit,AddToBalance } from "../controller/credit.controller.js";

export default function CreditRoutes(app){
    app.post("/api/credit/add",AddToBalance);
    app.put("/api/credit/update",UpdateCredit);
}