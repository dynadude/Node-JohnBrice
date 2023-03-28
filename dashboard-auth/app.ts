import express from 'express';
import authenticate from './routers/auth';
import { logPostRequests } from './middlewares/loggers';
import config from 'config';

import { handleError } from './middlewares/error_handlers';

const HOST = 'localhost';
const PORT = config.get('port');
const app = express();

app.use(express.json());

app.use(logPostRequests);

app.use('/auth', authenticate);

app.all('/*', (req, res) => {
	res.status(404);
	res.send("Kama Od");
});

app.use(handleError);

app.listen(PORT, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
