const sqlite = require("sqlite3").verbose();
const path = require("path");
const { usertable,membertable } = require("./table.migration");

class Database {
  constructor() {
    if (!Database.instance) {
      this.db = new sqlite.Database(
        path.join(__dirname, "../db/clubmanagement.db"),
        (err) => {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log("Connected to the  database.");
        }
      );
        this.db.run(
          usertable,
          (err, res) => {
            if (err) {
              reject(err);
            }
            console.log("Table is created")
          }
        );
        this.db.run(
          membertable,
          (err, res) => {
            if (err) {
              reject(err);
            }
            console.log("Table is created")
          }
        );
      
      Database.instance = this;
    }

    return Database.instance;
  }
}

const database = new Database();
module.exports = database;
