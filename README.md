Welcome to my Netflix CLI Yargs + Sequelize for Code Nation

---- Film Functions ----

You can create a film entry with a film title, actor and userId.<br/>
Example command: --create --title "John Wick" --actor "Keanu Reeves" --userId 1

You can read the entire film table, joined with the user table.<br/>
Example command: --read

You can search for a specific title. The resuluts are joined with the user table.<br/>
Example command: --search --title Shrek   

You can update a film's actor.<br/>
Example command: -update --title Shrek --actor "Cameron Diaz" 

You can delete a film by its title.<br/>
Example command: --delete --title Spiderman

---- User Functions ----

You can create a new user.<br/>
Example command: --addUser --username Liam

You can read the entire user table.<br/>
Example command: --readUsers   

You can search for a specific user and display every film they have added.<br/>
Exmaple command: --searchUsers --username Liam   


Thank you for reading, Liam.

