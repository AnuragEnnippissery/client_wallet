import { UpdateCredit,AddToBalance,GetCreditsByUser } from "../controller/credit.controller.js";

export default function CreditRoutes(app){
    app.post("/api/credit/add",AddToBalance);
    app.put("/api/credit/update",UpdateCredit);
    app.get("/api/credit/user/:userId",GetCreditsByUser);
}