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
    return it('version is a string', function() {
      return expect(typeof browser.version).toBe('string');
    });
  });
});
