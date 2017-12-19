const util = require('util');
const dns = require('dns');
const resolve = util.promisify(dns.resolve);
const reverse = util.promisify(dns.reverse);

async function reverseAddr(provided) {
  try {
    const atSymbol = '@';
    // If the --object argument is an email address, only grab the domain name
    let toResolve = provided.includes(atSymbol)
      ? provided.split(atSymbol)[1]
      : // else resolve the provided argument as it is
        provided;
    const resolvedAddr = await resolve(toResolve);
    const toReverse = resolvedAddr.join();
    const reversedAddr = await reverse(toReverse);
    return reversedAddr.join();
  } catch (e) {
    console.log(e);
  }
}

module.exports = reverseAddr;
