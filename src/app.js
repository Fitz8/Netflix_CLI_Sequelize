const yargs = require("yargs");
const { sequelize } = require ("./db/connection");

const app = async (yargsObj) => {
    if (yargsObj.create) {
        //create a new film
      } else if (yargsObj.read) {
        //read and display entire film database
      } else if (yargsObj.search) {
        //search by title, actor or rating
      } else if (yargsObj.update) {
        //update film entry
      } else if (yargsObj.delete) {
        //delete film
      } else {
        console.log("Incorrect Command");
      }
}

app(yargs.argv);