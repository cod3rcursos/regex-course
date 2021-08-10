const octet = '(?:\\d{1,2}|1[0-9]\\d|2[0-4]\\d|25[0-5])'


const ipv4Pattern = `\\b${octet}\\.${octet}\\.${octet}\\.${octet}\\b`

const ipv4Regex = new RegExp(ipv4Pattern, 'g');

console.log('0.0.0.0'.match(ipv4Regex));
console.log('192.168.0.1'.match(ipv4Regex));
console.log('255.255.255.255'.match(ipv4Regex));
console.log('256.256.256.256'.match(ipv4Regex));