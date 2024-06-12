// Example 1: String Array for Superheroes
const superHero: string[] = []; // Create an empty array to store superhero names

superHero.push("Spiderman"); // Add "Spiderman" to the superhero array
superHero.push("Batman");    // Add "Batman" to the superhero array

// Example 2: Number Array for Hero Power Levels
const heroPower: number[] = []; // Create an empty array to store hero power levels

heroPower.push(10);  // Add power level 10 to the heroPower array
heroPower.push(20);  // Add power level 20 to the heroPower array

// Example 3: Alternative Array Definition with Generics
const heroNature: Array<string> = []; // Create an empty array for hero natures (using generics)

heroNature.push("Cool"); // Add "Cool" to the heroNature array

// Example 4: User Type and Array for User Data
type Users = {  // Define a type "Users" for user objects
  name: string;  // User object has a "name" property of type string
  isActive: boolean; // User object has an "isActive" property of type boolean
}
const allUsers: Users[] = []; // Create an empty array to store user objects
// Add a user object with name "Sanjay" and isActive set to true
allUsers.push({ name: "Sanjay", isActive: true });
