// 6. Sort: I didn't know what rules to use to sort the array.
// I guessed it might be the libraryID. So I used the libraryID.

function sortArray(arr, property){
	arr.sort(function(a,b){return b[property] - a[property]})
	return arr;
}
var library = [
	{title: "The road Ahead", author: "Bill Gates", libraryID: 1254},
	{title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264},
	{title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245}
]
let sorted = sortArray(library, 'libraryID');
console.log(JSON.stringify(sorted));
