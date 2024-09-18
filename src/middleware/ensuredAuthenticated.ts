import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const ensuredAuthenticated = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const authHeaders = req.headers.authorization;
        console.log(authHeaders);
        if (!authHeaders) {
            return res.status(401).json({ error: "Token is missing" });
        }
        const [, token] = authHeaders.split(" ");
        try {
            verify(token, process.env.SECRET_JWT as string);
            const { sub } = decode(token) as { sub: string };
            res.locals.userId = sub;
            return next();
        } catch (error) {
            return res.status(401).json({ error: "Invalid token" });
        }
    }
}
