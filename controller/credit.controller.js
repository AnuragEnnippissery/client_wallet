import CreditModel from "../model/credit.model.js";
import mongoose from "mongoose";

export async function GetCreditsByUser(req, res) {
    try {
        const { userId } = req.params;
        //console.log("REQ PARAM userId =>", userId);
        const userPayments = await CreditModel.find({ owner: userId });
        //console.log("Result =>", userPayments);
        return res.status(200).json(userCredits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}