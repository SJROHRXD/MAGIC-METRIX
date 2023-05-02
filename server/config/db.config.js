import { createConnection } from 'mysql';
const db = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'',
})


export default db;