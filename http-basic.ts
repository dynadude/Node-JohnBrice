import http from 'http';

const HOST = 'localhost';
const PORT = '8080';

//function JSONArrayToCSV(array: Array<Object>) {
//    let csv: string = "";
//    let firstKeys = Object.keys(array[0]);
//
//    csv += firstKeys.join(', ');
//
//    for (let i = 0; i < array.length; i++) {
//	let keys = Object.keys(array[i])
//
//	for (let key in array[i]) {
//	    if (array[i][key]) {
//	    }
//	    console.log(array[i][key]);
//	}
//    }
//}

const server = http.createServer(async function (req, res) {

    let method = req.method;
    let url = req.url;

    if (method == "GET" && url == '/age') {
	res.writeHead(200);
	res.end("20");
	return;
    }

    if (method == "POST" && url == '/name') {
	res.writeHead(200);
	res.end("sagi");
	return;
    }

	res.writeHead(404);
	res.end("Kama Od");
});

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
