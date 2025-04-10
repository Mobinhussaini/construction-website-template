import mysql from "mysql2/promise";

export async function connectToDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.MySQL_DB_HOST,
        database: process.env.MySQL_DB_DATABASE,
        user: process.env.MySQL_DB_USER,
        password: process.env.MySQL_DB_PASSWORD,
    });

    return connection;
}
