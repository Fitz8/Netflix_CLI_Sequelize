const yargs = require("yargs");
const { sequelize } = require ("./db/connection");
const { createFilm, readFilms, updateFilm, deleteFilm, searchFilms } = require("./functions/filmFunctions");
const { createUser, readUsers, searchUsers} = require("./functions/userFunctions");

const app = async (yargsObj) => {
    await sequelize.sync();

    if (yargsObj.create) {
        createFilm({title: yargsObj.title, actor: yargsObj.actor, UserId: yargsObj.userId});
        //Create a new film

      } else if (yargsObj.read) {
        readFilms();
        //Read and display the film table with associated users

      } else if (yargsObj.search) {
        searchFilms(yargsObj.title);
        //search for a film by its title

      } else if (yargsObj.update) {
        const filter = {title: yargsObj.title};
        const update = {actor: yargsObj.newActor};
        updateFilm(filter, update);
        //Update the actor for a film title

      } else if (yargsObj.delete) {
        deleteFilm(yargsObj.title);
        //Delete a film by title

      } else if (yargsObj.addUser) {
        createUser({username: yargsObj.username});
        //Create a new user

      } else if (yargsObj.readUsers) {
        readUsers();
        //List every user in the user table

      } else if (yargsObj.searchUsers) {
        searchUsers(yargsObj.username);
        //Find a user and all films they have added
      }  else {
        console.log("Incorrect Command");
      }
}

app(yargs.argv);