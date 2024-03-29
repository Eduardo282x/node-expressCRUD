import express from "express";
import morgan from "morgan";
import cors from "cors"
import usersRouter from './routes/users.routes'
import rolesRouter from './routes/roles.routes'
import authenticationRouter from './routes/authentication.routes'
import inventoryRouter from './routes/inventory.routes'
import reserveRouter from './routes/reserve.routes'

const app = express();

// Settings
app.set("port",3000);

// Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

// Routes
app.use('/api/users',usersRouter);
app.use('/api/roles',rolesRouter);
app.use('/api/authentication',authenticationRouter);
app.use('/api/inventory',inventoryRouter);
app.use('/api/reserve',reserveRouter);

export default app;