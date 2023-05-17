import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const data = fs.readFileSync("db.json");
const monstDB = JSON.parse(data);

const newMonsters = {
    "monsters": monstDB.monsters.map(m => ({...m, id: uuidv4()}))
}

const newDB = JSON.stringify(newMonsters);
fs.writeFile('db2.json', newDB, (err) => {
    if (err) throw err;
    console.log("New db created")
})
