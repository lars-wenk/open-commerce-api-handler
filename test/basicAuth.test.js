const basicAuth = require('../ocapi/basicAuth');

test('It should be return a object', () => {
  expect(typeof basicAuth.getToken()).toBe('object');
});

test('it sould be return a token', () => {
  return basicAuth.getToken().then(token => {
    expect(token).toMatch(new RegExp('[a-z0-9\-]{36}'));
  });
});
