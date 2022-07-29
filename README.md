Welcome to my Netflix CLI Yargs + Sequelize for Code Nation

---- Film Functions ----

You can create a film entry with a film title, actor and userId 
Example command: --create --title "John Wick" --actor "Keanu Reeves" --userId 1

You can read the entire film table, joined with the user table
Example command: --read

You can search for a specific title. The resuluts are joined with the user table
Example command: --search --title Shrek   

You can update a film's actor
Example command: -update --title Shrek --actor "Cameron Diaz" 

You can delete a film by its title
Example command: --delete --title Spiderman

---- User Functions ----

You can create a new user
Example command: --addUser --username Liam

You can read the entire user table 
Example command: --readUsers   

You can search for a specific user and display every film they have added
Exmaple command: --searchUsers --username Liam   


Thank you for reading, Liam

