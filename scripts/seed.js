const { db } = require('@vercel/postgres');

async function createViewsTable(client) {

    try {
        const createTable = await client.sql`CREATE TABLE IF NOT EXISTS views (
            slug TEXT NOT NULL UNIQUE,
            count INT NOT NULL
        )`;

        console.log ("created views table");

        return {createTable};
    }
    catch (error){
        console.error("Error creating views table: ", error);
        throw error;
    }

}

async function createGuestBookTable(client) {
    try {
        const createTable =  await client.sql`CREATE TABLE IF NOT EXISTS guestbook (
            email TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            comment TEXT NOT NULL,
            created_date DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
        console.log ("created guestbook table");
        return {createTable};


    }
    catch (error){
        console.error("Error creating guest book table: ", error);
        throw error;
    }
}

async function createCommentsTable(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable =  await client.sql`CREATE TABLE IF NOT EXISTS comments (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            email TEXT NOT NULL,
            name TEXT NOT NULL,
            comment TEXT NOT NULL,
            slug TEXT NOT NULL,
            created_date DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
        console.log ("created comments table");
        return {createTable};


    }
    catch (error){
        console.error("Error creating comments table: ", error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();
  
    await createViewsTable(client);
    await createGuestBookTable(client);
    await createCommentsTable(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });