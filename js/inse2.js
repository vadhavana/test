var insertionSort = function(){
	//let arr = [3,5,1,4,6,8,10]
	let arr = [5,4,3,2,1]
	//let low = 0
	//let hi = arr.length-1
	for(let i = 0;i<=arr.length-1;i++){
	/*	if (arr[low] > arr[i])
		{
			let temp = arr[low]
			arr[low] = arr[i]
			arr[i] = temp
						
		}*/
		if(arr[i] > arr[i+1]){
			let temp = arr[i]
			arr[i] = arr[i+1]
			arr[i+1] = temp
		}


}
console.log(arr);
}
insertionSort();

// aa problem ma aarr ma 5 ane 4 wachhe gadad chhe
