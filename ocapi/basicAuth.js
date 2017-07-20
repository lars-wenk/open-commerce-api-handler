'use strict';

const rp = require('request-promise-native');
const config = require('../config/ocapi.json');

exports.getToken = () =>
  rp({
    method: 'POST',
    uri: `https://${config.hostname}/dw/oauth2/access_token?client_id=${config.client_id}`,
    rejectUnauthorized: false,
    json: true,
    headers: {
      Authorization: `Basic ${config.basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      grant_type: 'urn:demandware:params:oauth:grant-type:client-id:dwsid:dwsecuretoken',
    },
    timeout: 5000,
  })
  .then((outcome) => {
    return outcome.access_token;
  })
  .catch((err) => {
    throw new Error(console.log(err.message));
  });
