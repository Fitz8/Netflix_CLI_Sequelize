const { DataTypes } = require("sequelize");
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
}, {
    timestamps: false
});

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    timestamps: false
});

User.hasMany(Film);
Film.belongsTo(User);

module.exports = {Film, User};