const { Datatypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Film = sequelize.define("Film", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    },
});

module.exports = Film;