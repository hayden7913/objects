var set1 = {
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
}

var set2 = {
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
}

function mergeDataStreams(stream1, stream2) {
	var res = stream1;
	Object.keys(stream2).forEach(function (key) {
		if(!(key in res)){
			res[key] = stream2[key];
		}
	});
	return res;
}

console.log(mergeDataStreams(set1, set2))