/* 
 * "ABAZDC" ,"BACBAD" => ABAD
 * "AGGTAB" , "GXTXAYB"=> GTAB
 * */

var longSubseq = function(s1,s2){
	const result = [];
	//console.log(s1[1]);
	for(let i=0;i<s1.length;i++){
		for(let j=0;j<s2.length;j++){
			if(s1[i] == s2[j]){
			result.push(s1[i]);
		}	
		}
	}
	console.log(result);
	
}

longSubseq("ABAZDC","BACBAD");



// aa problem ma subsequence ma nathi aavtu plus aama repeat value aave chhe
