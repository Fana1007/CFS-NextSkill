const fs = require('fs');
const path = require('path');
const db = require('../config/db');

async function initDb() {
    try {
        const schemaPath = path.join(__dirname, '../models/schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running schema...');
        await db.query(schema);
        console.log('Database initialized successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Failed to initialize database:', error);
        process.exit(1);
    }
}

initDb();
