import CreditModel from "../model/credit.model.js";
import mongoose from "mongoose";

export async function GetCreditsByUser(req, res) {
    try {
        const { userId } = req.params;
        //console.log("REQ PARAM userId =>", userId);
        const userCredits = await CreditModel.find({ owner: userId });
        //console.log("Result =>", userPayments);
        return res.status(200).json(userCredits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function UpdateCredit(req, res) {
    try {
        const { creditId } = req.params; // credit document id
        const updatedData = req.body;   // new values

        const updatedCredit = await CreditModel.findByIdAndUpdate(
            creditId,
            updatedData,
            { new: true } // returns updated document
        );

        if (!updatedCredit) {
            return res.status(404).json({ message: "Credit not found" });
        }

        res.status(200).json(updatedCredit);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export async function AddToBalance(req, res) {
    try {
        const { creditId } = req.params;
        const { amount } = req.body;

        const updatedCredit = await CreditModel.findByIdAndUpdate(
            creditId,
            { $inc: { balance: amount } },
            { new: true }
        );

        res.status(200).json(updatedCredit);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
