
// 4. Delete
var student = {
	name: "David Rayy",
	class: "VI",
	rollno:12
}
console.log(JSON.stringify(student));
delete student.rollno;
console.log(JSON.stringify(student));

// 5. Length
let count = 0;
for( property in student){
	count++;
}
console.log(count);
console.log(Object.keys(student).length);
