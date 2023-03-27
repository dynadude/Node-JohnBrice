import { Request, Response } from 'express';
import mysql, { QueryOptions } from 'mysql2';
import { promisify } from 'util';

type DbConnectionDetails  = {
	localAddress: string,
	user: string,
	password: string
	database: string
}

interface DbConnection {
	connect(callback: () => void): void;
	end(): void;
	query(query: string): void
}

interface DbInterface {
	createConnection(dbConnectionDetails: DbConnectionDetails): DbConnection;
}

//let db: DbInterface = mysql;
//
//let connection = db.createConnection({
//	localAddress: "localhost",
//	user: "username",
//	password: "password",
//	database: "mydb"
//})
//
//connection.connect(() => {console.log("Connected")})

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

export const connectToDb = (pool = connectionPool) => async (req: Request, res: Response, next: Function) => {
	req.dbPool = pool;
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
