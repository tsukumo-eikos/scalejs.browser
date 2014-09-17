define(['scalejs!core', 'scalejs!application'], function(_arg) {
  var browser;
  browser = _arg.browser;
  console.log('core.browser: ', browser);
  return describe('core.browser', function() {
    it('is defined', function() {
      return expect(browser).toBeDefined();
    });
    it('has a name', function() {
      return expect(browser.name).toBeDefined();
    });
    it('name is a string', function() {
      return expect(typeof browser.name).toBe('string');
    });
    it('has a version', function() {
      return expect(browser.version).toBeDefined();
    });
    it('version is a string', function() {
      return expect(typeof browser.version).toBe('string');
    });
    it('has a major version', function() {
      return expect(browser.major).toBeDefined();
    });
    it('major version is a number', function() {
      return expect(typeof browser.major).toBe('number');
    });
    it('defines a minor version', function() {
      return expect(browser.hasOwnProperty('minor')).toBe(true);
    });
    it('defines a patch version', function() {
      return expect(browser.hasOwnProperty('patch')).toBe(true);
    });
    it('defines a build version', function() {
      return expect(browser.hasOwnProperty('build')).toBe(true);
    });
    it('has a webkit test', function() {
      return expect(browser.webkit).toBeDefined();
    });
    it('webkit test is a boolean', function() {
      return expect(typeof browser.webkit).toBe('boolean');
    });
    return it('defines a webkit version', function() {
      return expect(browser.hasOwnProperty('webkit_version')).toBe(true);
    });
  });
});
