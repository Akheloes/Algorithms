function powerSetRecursive(at, set, used) {
	var subSet = "";
	if(at == set.length){
		subSet += "{ ";
		for(var i=0; i<set.length; i++){
			if(used[i]){
				subSet += set[i] + " "; 
			}			
		}
		subSet += "}" ;
		console.log(subSet);
	} else {
		used[at] = true; 
		powerSetRecursive(at+1, set, used);

		used[at] = false;
		powerSetRecursive(at+1, set, used);
	}
}