
/*"Validate US Telephones
The purpose of this function is to check if the argument (a string) 
is a valid 10-digit US phone number (w/ or w/out country code*/


function telephoneCheck(str) {
var patt = new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))(\-|\s)?\d{3}(\-|\s)?\d{4}$/);
return (patt.test(str));
}


telephoneCheck("555-555-5555");




/*Symmetric Difference
Create a function that takes two or more arrays and returns an 
array of the symmetric difference (△ or ⊕) of the provided arrays. */

/* esversion:6 */

function sym(...args) {
let argArr = [];
for (i = 0; i <args.length;i++){ argArr.push(args[i]); }

return argArr.reduce(function(a,b){
var filtered1=a.filter(function(e){return b.indexOf(e)<0;});
var filtered2=b.filter(function(e){return a.indexOf(e)<0;});
filtered = filtered1.concat(filtered2);
  filtered.sort(function(m,n){return m-n;});
  
let syms = [];
   for ( var u = 0; u < filtered.length; u++ ) {
        if ( filtered[u] !== filtered[u-1] ) {
            syms.push(filtered[u]);
        } 
   }
  
return syms;
}); //reduce


} //function sym

