/*let sayHello = function(name){
	console.log("greetings");
}
sayHello('rohit')*/

//console.log('helkd')



/*for(var i =0;i<=3;i++){
	for(var j=0;j<=i;j++){
		console.log('*');
	}
	console.log('\n');

}*/

/*let Grade = function(percent){
	if (percent <= 100 && percent > 50){
		console.log('you have cleared successfully');
	}
	else if(percent <= 50 && percent > 35){
		console.log('you need to ractice bit more');
	}
	else{
		console.log('You have failed your xam');
	}
}

Grade(45)
*/


/*
days = ['mon','tue','wed','thu','fri','sat']

//console.log(days);

days.forEach(function(day,index){
	console.log(`Day index is: ${index+1} and day is:${day}`);
})*/


let sample = function(arr,x){
	
	for(let i=0;i<=arr.length-1;i++){
		if(arr[i] == x){
		console.log(`${x} is there in given array`)	
		}
		else{
			arr.push(x);
			console.log(`${x} is successfully added`);
		}
	}
	console.log(arr)
}
sample([1,2,3],10);
