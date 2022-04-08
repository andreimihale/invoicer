import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(compression());

export default app;
