///The purpose of this function is to check if the argument (a string) is a valid 10-digit US phone number (w/ or w/out country code)


function telephoneCheck(str) {
var patt = new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))(\-|\s)?\d{3}(\-|\s)?\d{4}$/);
return (patt.test(str));
}


telephoneCheck("555-555-5555");
