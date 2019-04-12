let insertion = function(){
	//let arr = [5,6,4,8,20,15,20,100,50,80,30]
	//let arr = [5,4,3,2,1]
	let arr = [200,500,1546,3598,7561,100,3466]
	for(let i=0;i<=arr.length-1;i++){
		for(let j=0;j<=arr.length-1;j++){
			if(arr[i] < arr[j]){
				let temp
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
				
			}
		}
	}
	console.log(arr);
}
insertion();
