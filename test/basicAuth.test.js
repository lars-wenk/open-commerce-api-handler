const basicAuth = require('../ocapi/basicAuth');
const config = require('../config/ocapi.json');

test('it sould be return a token', () => {
  return basicAuth.getToken().then(token => {
    expect(token.access_token).toMatch(new RegExp('[a-z0-9\-]{36}'));
  });
});

test('it sould be return a 500 error, because of wrong Authorization Hash', () => {
  let dynOptions = {
    headers: {
      Authorization: `Basic 12345`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };
  return basicAuth.getToken(dynOptions).catch(err => {
    expect(err.message).toMatch('StatusCodeError: 500');
  })
});

test('it sould be return a 400 error, because of wrong client_id', () => {
  let dynOptions = {
    uri:`https://${config.hostname}/dw/oauth2/access_token?client_id=12345`,
    headers: {
      Authorization: `Basic ${config.basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };
  return basicAuth.getToken(dynOptions).catch(err => {
    expect(err.message).toMatch('StatusCodeError: 400');
  })
});
