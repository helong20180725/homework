
// 3. Any number of parameters
function sum(){
	let i = 0;
	let sum = 0;
	while(i < arguments.length){
		sum += arguments[i];
		i++;
	}
	return sum;

}
console.log(sum(1,2,3,4,5))





