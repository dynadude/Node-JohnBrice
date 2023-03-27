import { Request, Response } from 'express';
import mysql from 'mysql2';
import mongoose from 'mongoose';
import config from 'config';

const connectionPool = mysql.createPool({
	host: "localhost",
	user: "username",
	password: "password",
	database: "mydb",
	waitForConnections: true,
	connectionLimit: 10,
	maxIdle: 10,
	idleTimeout: 60000,
	queueLimit: 0
});

export const connectToMySqlDb = (pool = connectionPool) => async (req: Request, res: Response, next: Function) => {
	req.dbPool = pool;
	next();
}

const coinSchemaObject = {
	symbol: String,
	value: Number,
	scrapedAt: Date
}

async function mongoCreateCoinSchema() {
	try {
		await mongoose.connect(`mongodb://${config.get("config.mongo.db")}:${config.get("config.mongo.port")}`);

		let coinSchema = new mongoose.Schema(coinSchemaObject);
		let mongoModel = mongoose.model("Coin Schema", coinSchema);
		let mongoInstance = new mongoModel({symbol: "FID", value: 2, scrapedAt: Date.now()});
		mongoInstance.save();
	}
	catch (err){
		console.log(err);
	}

};

mongoCreateCoinSchema();
export const connectToMongoDb = async (req: Request, res: Response, next: Function) => {
	await mongoose.connect(`mongodb://${config.get("config.mongo.db")}:${config.get("config.mongo.port")}`);
	next();
}

// TABLE CREATION
/*
connection.query(`
CREATE TABLE users (
	id int auto_increment,
	username varchar(255) not null,
	primary key (id)
)`)

connection.query(`
CREATE TABLE users_symbols (
	id int auto_increment,
	user_id int not null,
	symbol varchar(3) not null
	primary key (id)
)`)
connection.end()
*/
