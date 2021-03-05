const ages = [12,14,15,17];
const ages2 = [ 15,16,12];
const allAges = ages.concat(ages2);
const allAges2 = [...ages,5,...ages2]
console.log(allAges2);