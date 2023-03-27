import express, { Request, Response, Errback } from 'express';
import { authenticate } from './middlewares/auth';
import { logPostRequests } from './middlewares/loggers';
import config from 'config';

import userRouter from './routers/users';
import { handleError } from './middlewares/error_handlers';

const HOST = 'localhost';
const PORT = '8080';
const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.json());

app.use('/users', userRouter);

app.use(authenticate);

app.use(logPostRequests);

app.post('/', (req, res) => {
	res.send(`Password: ${config.get("config.mysql.password")}`);
});

app.get('/users/', (req, res, next) => {
	if (!req.query.id) {
		next("No Token Specified");
		return;
	}

	res.send(`Welcome ${req.query.id}`);
});

app.get('/query/', (req, res) => {
	res.send(`Welcome ${req.query.id}`);
});

app.delete('/ticket/:id', (req, res) => {
	res.send(`Welcome ${req.params.id}`);
});

app.patch('/employee/:id', (req, res) => {
	res.send(`Welcome ${req.params.id}`);
});

app.put('/organization/:id', (req, res) => {
	res.send(`Welcome ${req.params.id}`);
});

app.all('/*', (req, res) => {
	res.status(404);
	res.send("Kama Od");
});

app.use(handleError);

app.listen(PORT, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
