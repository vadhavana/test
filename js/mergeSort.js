let merge = function(){
	let arr = [4,20,100,30,58,90,65,3,7];

	for(let i=0;i<=arr.length-1;i++){
		for(let j=1;j<=arr.length-1;j++){
			if (arr[i]>arr[j]){
				let temp
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}

	console.log(arr);
}
merge();

/*
left=0
right=1
thenn increment that*/
