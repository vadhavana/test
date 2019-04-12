const st_arr =[ { id:1,name:'rohit',std:3},
	{ id:2,name:'vijay',std:4 },
	{ id:3, name:'vicky',std:5 },
	{id:3 ,name:'mahesh' ,std:1} ]

const stdwiseArr = []

/*for(let i=0;i<=st_arr-1;i++){
	console.log(st_arr[i]);
}*/

st_arr.forEach(function(arr,i){
//	console.log(arr.id);
//	console.log(arr.name);
//	console.log(arr.std);
	if (arr.id){
	stdwiseArr.push(`${arr.id} { name:${arr.name},std:${arr.std}}`);
	}
});

console.log(stdwiseArr);


//console.log(st_arr);
