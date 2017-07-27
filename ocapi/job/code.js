'use strict';

const rp = require('request-promise-native');
const basicAuth = require('../basicAuth');
const config = require('../../config/ocapi.json');

const options = {
  method: 'POST',
  uri: `https://${config.hostname}/s/-/dw/data/${config.ocapi_version}/jobs/${config.job_id}/executions?client_id=${config.client_id}`,
  rejectUnauthorized: false,
  headers: {
    'Content-Type': 'application/json',
  },
  json: true,
  timeout: 5000,
}

const pushCodeReplication = () =>
  basicAuth.getToken()
  .then((baererToken) => {
    rp(options,options.headers.Authorization = `Bearer ${baererToken.access_token}`)
    .then((outcome) => {
      console.log(outcome);
      return true;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  })
  .catch((err) => {
    throw new Error(err.message);
  });

pushCodeReplication();
