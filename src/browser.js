define(['scalejs!core'], function(core) {
  var self;
  self = (function(ua) {
    var android, breakdown, firstMatch, getVersion, iosdevice, likeAndroid, mobile, osmajor, osversion, result, tablet, test, versionIdentifier;
    firstMatch = function(regex) {
      var match;
      match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    };
    test = function(regex) {
      return regex.test(ua);
    };
    getVersion = function(pregex) {
      var reg;
      reg = pregex.source + /[\s\/:-]?(\d+(\.\d+)*)/.source;
      return firstMatch(new RegExp(reg, 'i'));
    };
    iosdevice = firstMatch(/(ipad|ipod|iphone)/i).toLowerCase();
    likeAndroid = test(/like android/i);
    android = !likeAndroid && test(/android/i);
    versionIdentifier = getVersion(/version/);
    tablet = test(/tablet/i);
    mobile = !tablet && test(/[^-]mobi/i);
    result = (function() {
      switch (false) {
        case !test(/opera|opr/i):
          return {
            name: 'Opera',
            opera: true,
            version: versionIdentifier || getVersion(/(?:opera|opr)/)
          };
        case !test(/windows phone/i):
          return {
            name: 'Windows Phone',
            windowsphone: true,
            msie: true,
            version: getVersion(/iemobile/)
          };
        case !test(/msie|trident/i):
          return {
            name: 'Internet Explorer',
            msie: true,
            version: getVersion(/(?:msie|rv)/)
          };
        case !test(/chrome|crios|crmo/i):
          return {
            name: 'Chrome',
            chrome: true,
            version: getVersion(/(?:chrome|crios|crmo)/)
          };
        case !iosdevice:
          return {
            name: iosdevice === 'iphone' ? 'iPhone' : iosdevice === 'ipad' ? 'iPad' : 'iPod',
            version: versionIdentifier || void 0
          };
        case !test(/sailfish/i):
          return {
            name: 'Sailfish',
            sailfish: true,
            version: getVersion(/sailfish\s?browser/)
          };
        case !test(/seamonkey\//i):
          return {
            name: 'Sea Monkey',
            seamonkey: true,
            version: getVersion(/seamonkey/)
          };
        case !test(/firefox|iceweasel/i):
          return {
            name: 'Firefox',
            firefox: true,
            verison: getVersion(/(?:firefox|iceweasel)/)
          };
        case !test(/silk/i):
          name('Amazon Silk');
          return {
            silk: true,
            version: getVersion(/silk/)
          };
        case !android:
          return {
            name: 'Android',
            version: versionIdentifier || void 0
          };
        case !test(/phantom/i):
          return {
            name: 'PhantomJS',
            phantom: true,
            version: getVersion(/phantomjs/)
          };
        case !(test(/blackberry|\bbb\d+/i) || test(/rim\stablet/i)):
          return {
            name: 'BlackBerry',
            blackberry: true,
            version: versionIdentifier || getVersion(/blackberry[\d]+/)
          };
        case !test(/(web|hpw)os/i):
          return {
            name: 'WebOS',
            webos: true,
            version: versionIdentifier || getVersion(/w(?:eb)?osbrowser/)
          };
        case !test(/bada/i):
          return {
            name: 'Bada',
            bada: true,
            version: getVersion(/dolfin/)
          };
        case !test(/tizen/i):
          return {
            name: 'Tizen',
            tizen: true,
            version: getVersion(/(?:tizen\s?)?browser/) || versionIdentifier
          };
        case !test(/safari/i):
          return {
            name: 'Safari',
            safari: true,
            version: versionIdentifier
          };
        default:
          return {};
      }
    })();
    if (result.firefox && test(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i)) {
      result.firefoxos = true;
    } else if (result.webos && test(/touchpad\//i)) {
      result.touchpad = true;
    }
    if (test(/(apple)?webkit/i)) {
      result.name = result.name || 'Webkit';
      result.webkit = true;
      result.version = result.version || versionIdentifier;
    } else if (!result.opera && test(/gecko\//i)) {
      result.name = result.name || 'Gecko';
      result.gecko = true;
      result.version = result.version || getVersion(/gecko/);
    }
    if (android || result.silk) {
      result.android = true;
    } else if (iosdevice) {
      result.iosdevice = true;
      result.ios = true;
    }
    osversion = (function() {
      switch (false) {
        case !iosdevice:
          return firstMatch(/os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g, '.');
        case !android:
          return getVersion(/android/);
        case !result.windowsphone:
          return getVersion(/windows phone (?:os)?/);
        case !result.webos:
          return getVersion(/(?:web|hpw)os/);
        case !result.blackberry:
          return getVersion(/rim\stablet\sos/);
        case !result.bada:
          return getVersion(/bada/);
        case !result.tizen:
          return getVersion(/tizen/);
        default:
          return '';
      }
    })();
    if (osversion) {
      result.osversion = osversion;
    }
    osmajor = osversion.split('.')[0];
    if (tablet || iosdevice === 'ipad' || (android && (osmajor === 3 || (osmajor === 4 && !mobile))) || result.silk) {
      result.tablet = true;
    } else if (mobile || (iosdevice === 'iphone' || iosdevice === 'ipod') || android || result.blackberry || result.webos || result.bada) {
      result.mobile = true;
    }
    if (result.version) {
      breakdown = result.version.match(/\d+/g);
      if (breakdown.length > 0) {
        result.major = Number(breakdown[0]);
      }
      if (breakdown.length > 1) {
        result.minor = Number(breakdown[1]);
      }
      if (breakdown.length > 2) {
        result.patch = Number(breakdown[2]);
      }
      if (breakdown.length > 3) {
        result.build = Number(breakdown[3]);
      }
    }
    return result;
  })(navigator.userAgent || '');
  return core.registerExtension({
    browser: self
  });
});
