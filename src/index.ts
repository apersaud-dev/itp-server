import dotenv from 'dotenv';
import app from './app';
import { Database } from './data/db/database';

dotenv.config();

const PORT = process.env.PORT || 4000;
const db = new Database(process.env.MONGO_URI as string);

(async function () {
    db.connect();
    app.listen(PORT, () =>
        console.log(`Server is running on ${PORT}`)
    )
})();