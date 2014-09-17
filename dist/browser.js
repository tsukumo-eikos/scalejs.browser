
require(['scalejs!core'], function(core) {
  var name, ua, version, version_breakdown, webkit, webkit_version;
  ua = navigator.userAgent;
  name = (function() {
    switch (false) {
      case !/firefox/i.test(ua):
        return 'firefox';
      case !/chrome/i.test(ua):
        return 'chrome';
      case !/safari/i.test(ua):
        return 'safari';
      case !/msie/i.test(ua):
        return 'msie';
    }
  })();
  version = (function() {
    switch (false) {
      case name !== 'firefox':
        return ua.match(/firefox[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1];
      case name !== 'chrome':
        return ua.match(/chrome[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1];
      case name !== 'safari':
        return ua.match(/version[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1];
      case name !== 'msie':
        return ua.match(/msie[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1];
    }
  })();
  version_breakdown = version.match(/\d+/g);
  webkit = /webkit/i.test(ua);
  if (webkit) {
    webkit_version = ua.match(/webkit[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1];
  }
  return core.registerExtension({
    browser: {
      name: name,
      version: version,
      major: Number(version_breakdown[0]),
      minor: Number(version_breakdown[1]),
      patch: Number(version_breakdown[2]),
      build: Number(version_breakdown[3]),
      webkit: webkit,
      webkit_version: webkit_version
    }
  });
});

define("browser", function(){});

