const {Film, User} = require("../model/tables");

exports.createFilm = async (filmObj) => {
    try {
        const findUserId = await User.findAll({
            where: {
                id: filmObj.UserId
            }      
        });
        //If the user Id is not saved in Users table, then the film is rejected
        if (findUserId.length == 0) {
            console.log("User does not exist. Your film has not been added")
        } else {
            const newFilm = await Film.create(filmObj);
            console.log("Added Film:", JSON.stringify(newFilm, null, 2));
        }
    } catch(error){
        console.log(error);
    }
}

exports.readFilms = async () => {
    try {
        const results = await Film.findAll({
            include: [{
              model: User,
              required: true
             }]
          });
        console.log("All films:", JSON.stringify(results, null, 2));
    } catch(error){
        console.log(error);
    }
}

exports.searchFilms = async (searchTitle) => { 
    try {
        const results = await Film.findAll({
            include: [{
                model: User,
                required: true
               }],
      
            where: {
                title: searchTitle
              }
        });
        console.log("", JSON.stringify(results, null, 2));
    } catch(error){
        console.log(error);
    }
}

exports.updateFilm = async (filter, update) => {
    try {
        await Film.update(update, {
            where: filter
        });
        const results = await Film.findAll({
            where: filter
        });
        console.log("Updated Film:", JSON.stringify(results, null, 2));

    } catch(error){
        console.log(error);
    }
}

exports.deleteFilm = async (filmTitle) => {
    try {
        await Film.destroy({
            where: {
              title: filmTitle
            }
          });
    } catch(error){
        console.log(error);
    }
}

