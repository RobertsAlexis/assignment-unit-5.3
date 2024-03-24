console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection =[]; 
//Create an empty array named myCollection.

function addToCollection(collection, title, artist, yearPublished){
  let Album = {           
    title:title,
    artist:artist,
    yearPublished:yearPublished,
  };
  collection.push(Album);    
  return Album;             
}
console.log('array before adding', myCollection);
// Create a function named addToCollection. It should have this basic structure:
// function addToCollection(collection, title, artist, yearPublished)
// This function should:
// Take in a collection parameter. (This allows the function to be reused to add an album to any array of album objects.)
// Take in the album's title, artist, yearPublished as parameters.
// Create a new object having the above properties.
// NOTE: Your object's properties must have title, artist, and yearPublished in order for this assignment's automated tests to work correctly!
// Add the new object to the end of the collection array.
// return the newly created object.
// Use and Test the addToCollection function:

addToCollection(myCollection,'Kid Cudi', 'Man on the Moon: The End of Day', 2009);
console.log(myCollection, 'Kid Cudi', 'Man on the Moon: The End of Day', 2009);
addToCollection(myCollection,'Bill Withers', 'Menagerie', 1977);
console.log(myCollection, 'Bill Withers', 'Menagerie', 1977);
addToCollection(myCollection,'Alicia Keys', 'Songs in A Mirror', 2001);
console.log(myCollection, 'Alicia Keys', 'Songs in A Mirror', 2001);
addToCollection(myCollection,'Backstreet Boys', "Backstreet's Back", 1997);
console.log(myCollection, 'Backstreet Boys', "Backstreet's Back", 1997);
addToCollection(myCollection,'Bill Withers', 'Still Bill', 1972);
console.log(myCollection, 'Bill Withers', 'Still Bill', 1972);
addToCollection(myCollection,'Joan Jett', 'Bad Reputation', 1981);
console.log(myCollection, 'Joan Jett', 'Bad Reputation', 1981);
// Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// console.log each album as added using the function's returned value.
// After all are added, console.log the myCollection array.

function showCollection(collection){
  for (let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`)
  }
  return 'Rock and roll'
}
console.log('The whole collection')
console.log(showCollection(myCollection));
// Create a function named showCollection. This function should:
// Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
// Loop through the collection and console.log each album's information formatted within a single string, like: TITLE by ARTIST, published in YEARPUBLISHED.
// Test the showCollection function.


// Add a function named findByArtist. This function should:
// Take in a collection parameter. Remember, we want to be able to search any collection!
// Take in an artist (string) parameter.
// Create an empty array to hold any matching results, if any.
// Loop through the collection and add any album objects with a matching artist to the array.
// Return the array with the matching results. (If no results are found, an empty array should be returned.)
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
