
/*"Validate US Telephones
The purpose of this function is to check if the argument (a string) 
is a valid 10-digit US phone number (w/ or w/out country code*/


function telephoneCheck(str) {
var patt = new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))(\-|\s)?\d{3}(\-|\s)?\d{4}$/);
return (patt.test(str));
}


telephoneCheck("555-555-5555");



/* Symmetric Difference Create a function that takes two or more arrays and returns an array of the symmetric difference
(△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of 
two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional
symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/


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







/*Exact Change: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.*/

function checkCashRegister(price, cash, cid) {
  var change=(cash-price).toFixed(2);
 
  var totalCID=0;
  var exactChange={};
  var arrExactChange=[];
  for (i=0;i<cid.length;i++){
    totalCID += cid[i][1];
  }
  
 
  if (change > Number(totalCID.toFixed(2))){
    return "Insufficient Funds";
  }
  else if (change == totalCID.toFixed(2)){
    return "Closed";
  }
  else 
    while (change>100 & cid[8][1]>=100)
      {change-=100;cid[8][1]-=100;
      if (exactChange.hasOwnProperty("ONE HUNDRED"))
        {exactChange["ONE HUNDRED"]+=100;}
       else{exactChange["ONE HUNDRED"]=100;}
      }
  while (change>20 & cid[7][1]>=20)
      
      {console.log(change);change-=20;cid[7][1]-=20;
      if (exactChange.hasOwnProperty("TWENTY"))
        {exactChange["TWENTY"]+=20;}
       else{exactChange["TWENTY"]=20;}
        }
  while (change>10 & cid[6][1]>=10)
      {change-=10;cid[6][1]-=10;
      if (exactChange.hasOwnProperty("TEN"))
        {exactChange["TEN"]+=10;}
       else{exactChange["TEN"]=10;}
        }
  while (change>5 & cid[5][1]>=5)
      {change-=5;cid[5][1]-=5;
      if (exactChange.hasOwnProperty("FIVE"))
        {exactChange["FIVE"]+=5;}
       else{exactChange["FIVE"]=5;}
        }
  while (change>1 & cid[4][1]>=1)
      {change-=1;cid[4][1]-=1;
      if (exactChange.hasOwnProperty("ONE"))
        {exactChange["ONE"]+=1;}
       else{exactChange["ONE"]=1;}
        }
  while (change>.249 & cid[3][1]>=.25)
      {change-=.25;cid[3][1]-=.25;
      if (exactChange.hasOwnProperty("QUARTER"))
        {exactChange["QUARTER"]+=.25;}
       else{exactChange["QUARTER"]=.25;}
        }
  while (change>.099 & cid[2][1]>=.10)
      {change-=.1;cid[2][1]-=.10;
      if (exactChange.hasOwnProperty("DIME"))
        {exactChange["DIME"]+=.10;}
       else{exactChange["DIME"]=.10;}
        }
  while (change>.049 & cid[1][1]>=.05)
      {change-=.05;cid[1][1]-=.05;
      if (exactChange.hasOwnProperty("NICKEL"))
        {exactChange["NICKEL"]+=.05;}
       else{exactChange["NICKEL"]=.05;}
        }
  while (change>.009 & cid[0][1]>=.01)
      {console.log(change);change-=.01;cid[0][1]-=.01;
      if (exactChange.hasOwnProperty("PENNY"))
        {exactChange["PENNY"]+=.01;}
       else{exactChange["PENNY"]=.01;}
        }

console.log(exactChange.length);
for(k in exactChange)
{
  arrExactChange.push([k,exactChange[k]])
}
 console.log(change);
if (change>0){return "Insufficient Funds";}
else{return arrExactChange;}
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


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

