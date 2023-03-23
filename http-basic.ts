import express, { Request, Response, Errback } from 'express';

const HOST = 'localhost';
const PORT = '8080';
const app = express();

app.use(express.json());

function authenticate(req: Request, res: Response, next: Function) {
	if (req.headers.authorization !== "Bearer 123") {
		res.status(401);
		res.send("Ya Maniak!!!");
		return;
	}

	next();
}

function logPostRequests(req: Request, res: Response, next: Function) {
	if (req.method !== "POST") {
		next();
		return;
	}

	res.on('finish', () => {
		console.log(`Endpoint: ${req.url} Status: ${res.statusCode}`);
	})

	next();
}

function handleLogonError(err: string, req: Request, res: Response, next: Function) {
	if (err !== "No Token Specified") {
		next(err);
		return;
	}

	res.status(400);
	res.send("No Token Specified");
}

app.use(authenticate);

app.use(logPostRequests);

app.post('/', (req, res) => {
	res.send(`Welcome ${req.body.name}`);
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

app.use(handleLogonError);

app.listen(PORT, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
