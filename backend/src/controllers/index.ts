import { Request, Response } from "express";

export const indexController = async (req: Request, res: Response) => {
    try {
        // Data atual para navbar
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
            "Outubro", "Novembro", "Dezembro"];
        const d = new Date();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let day = d.getDate();



        res.render("index", { month, year, day });
    } catch (error) {
        console.error(error);
    }
}