'use strict';

const rp = require('request-promise-native');
const basicAuth = require('../basicAuth');
const config = require('../../config/ocapi.json');

const pushCodeReplication = () =>
  basicAuth.getToken()
    .then((baererToken) => {
      rp({
        method: 'POST',
        uri: `https://${config.hostname}/s/-/dw/data/${config.ocapi_version}/jobs/${config.job_id}/executions?client_id=${config.client_id}`,
        rejectUnauthorized: false,
        headers: {
          Authorization: `Bearer ${baererToken}`,
          'Content-Type': 'application/json',
        },
        json: true,
        timeout: 5000,
      })
      .then((outcome) => {
        console.log(outcome);
        return true;
      })
      .catch((err) => {
        throw new Error(console.log(err.message));
      });
    });

pushCodeReplication();
