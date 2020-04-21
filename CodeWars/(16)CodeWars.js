/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 

We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. 

It must return the display text as shown in the examples.

*/

function likes(names) {
    let res;

    if (names.length == 0) {
        res = 'no one likes this'
    } else if (names.length == 1) {
        res = `${names[0]} likes this`;
    } else if (names.length == 2) {
        res = `${names[0]} and ${names[1]} like this`;
    } else if (names.length == 3) {
        res = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        res = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
    return res;
}

// likes ([]); // "no one likes this"
// likes (["Peter"]); // "Peter likes this"
//likes (["Jacob", "Alex"]); // "Jacob and Alex like this"
//likes (["Max", "John", "Mark"]); // "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this"
