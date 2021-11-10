const fetch = require("node-fetch");
require("dotenv").config();

const codegenFetch = async (url, options = {}) => {
  const authURL = process.env.ORDRS_URL ? `${process.env.ORDRS_URL}api/authorization` : undefined;
  const apiKey = process.env.ORDRS_API_KEY;
  const clientId = process.env.ORDRS_CLIENT_ID;
  const secret = process.env.ORDRS_SECRET_KEY;

  // 1. Do we have everything we need?
  if (!authURL || !apiKey || !clientId || !secret)
    throw new Error(`Did not provide required secrets for authentication.`);

  // 2. Get auth token
  const response = await fetch(authURL, {
    method: "POST",
    headers: { accept: "application/json" },
    body: JSON.stringify({
      apiKey,
      clientId,
      secret,
    }),
  });

  if (!response.ok) throw new Error(`Bad response from Authorization endpoint: ${response.status}.`);

  const payload = await response.json();

  if (!payload || !payload.token) throw new Error(`Unexpected response from Authorization endpoint.`);

  // 3. Use the token from above to introspect schema
  return fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${payload.token}` },
  });
};

module.exports = exports = codegenFetch;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports;
