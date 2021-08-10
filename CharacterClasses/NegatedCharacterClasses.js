const addressInfo = `
    +1 (408) 996-1010
    One Apple Park Way Cupertino, CA 95014 United States
`
const flightId = "4815162342";
console.log(flightId.match(/[^02468]/g))
console.log(flightId.match(/[^2-4]/g))

console.log(addressInfo.match(/\D/g));
console.log(addressInfo.match(/[^0-9]/g));

console.log("**Any non-whitespace**");
console.log(addressInfo.match(/\S/g));
console.log(addressInfo.match(/[^\n\r\t\f ]/g));

console.log("**Any non-word character**");
console.log(addressInfo.match(/\W/g));
console.log(addressInfo.match(/[^a-zA-Z0-9_]/g));