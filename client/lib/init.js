if(typeof web3 === 'undefined')
  web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/bYXbPgaIkHETyalvh0M1'));

Template.registerHelper('compare', function(v1, v2) {
  
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);
	console.log(v1, v2);


  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});
