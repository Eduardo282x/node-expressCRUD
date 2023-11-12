import express from "express";
import morgan from "morgan";

import usersRouter from './routes/users.routes'
import rolesRouter from './routes/roles.routes'
import authenticationRouter from './routes/authentication.routes'

const app = express();

// Settings
app.set("port",3000);

// Middlewares
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.use('/api/users',usersRouter)
app.use('/api/roles',rolesRouter)
app.use('/api/authentication',authenticationRouter)

export default app;