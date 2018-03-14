
const base64 = require('base-64');
const utf8 = require('utf8');
const config = require('./ocapi.json');

const clientPassword = config.client_password;
const bmPassword = config.password;
const bmUsername = config.username;
const bytes = utf8.encode(`${bmUsername}:${bmPassword}:${clientPassword}`);
const hash = base64.encode(bytes);

exports.hash = hash;
