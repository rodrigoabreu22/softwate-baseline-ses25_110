// server.js
const axios = require("axios");

async function checkHttp(url) {
  // Consider enforcing an allowlist of hosts/URLs to prevent SSRF.
  const res = await axios.get(url, {
    timeout: 5000,
    maxRedirects: 0,
    validateStatus: () => true, // handle status codes yourself
  });

  console.log(`Status: ${res.status}`);
  return res.status;
}

module.exports = { checkHttp };