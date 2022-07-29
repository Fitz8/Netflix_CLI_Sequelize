const {Film, User} = require("../model/tables");

exports.createUser = async (userObj) => {
    try {
      const newUser = await User.create(userObj);
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.readUsers = async () => {
    try {
      const results = await User.findAll();
      console.log("All users:", JSON.stringify(results, null, 2));
    } catch (error) {
      console.log(error);
    }
  };

  exports.searchUsers = async (user) => {
    try {
        console.log(user)
        const results = await User.findAll({
            include: [{
                model: Film,
                required: true
               }],
        
            where: {
                username: user
              }
        });
        console.log("", JSON.stringify(results, null, 2));
    } catch(error){
        console.log(error);
    }
}