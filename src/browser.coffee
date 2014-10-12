
# largely inspired by https://github.com/ded/bowser
# and http://www.useragentstring.com/pages/Browserlist/

# global require

define ['scalejs!core'], (core) ->

    self = (( ua ) ->

        firstMatch = (regex) ->
            match = ua.match regex
            (match and match.length > 1 and match[1]) or ''
        test = (regex) ->
            regex.test ua
        getVersion = (pregex) ->
            reg = pregex.source + /[\s\/:-]?(\d+(\.\d+)*)/.source
            firstMatch new RegExp reg, 'i'

        iosdevice   = firstMatch(/(ipad|ipod|iphone)/i).toLowerCase()
        likeAndroid = test /like android/i
        android     = not likeAndroid and test /android/i
        versionIdentifier = getVersion /version/
        tablet      = test /tablet/i
        mobile      = not tablet and test /[^-]mobi/i

        result = switch
            when test /opera|opr/i
                name: 'Opera'
                opera: true
                version: versionIdentifier or getVersion /(?:opera|opr)/

            when test /windows phone/i
                name: 'Windows Phone'
                windowsphone: true
                msie: true
                version: getVersion /iemobile/

            when test /msie|trident/i
                name: 'Internet Explorer'
                msie: true
                version: getVersion /(?:msie|rv)/

            when test /chrome|crios|crmo/i
                name: 'Chrome'
                chrome: true
                version: getVersion /(?:chrome|crios|crmo)/

            when iosdevice
                name: if iosdevice is 'iphone' then 'iPhone' else if \
                         iosdevice is 'ipad' then 'iPad' else 'iPod'
                version: versionIdentifier or undefined

            when test /sailfish/i
                name: 'Sailfish'
                sailfish: true
                version: getVersion /sailfish\s?browser/

            when test /seamonkey\//i
                name: 'Sea Monkey'
                seamonkey: true
                version: getVersion /seamonkey/

            when test /firefox|iceweasel/i
                name: 'Firefox'
                firefox: true
                verison: getVersion /(?:firefox|iceweasel)/

            when test /silk/i
                name 'Amazon Silk'
                silk: true
                version: getVersion /silk/

            when android
                name: 'Android'
                version: versionIdentifier or undefined

            when test /phantom/i
                name: 'PhantomJS'
                phantom: true
                version: getVersion /phantomjs/

            when test(/blackberry|\bbb\d+/i) or test(/rim\stablet/i)
                name: 'BlackBerry'
                blackberry: true
                version: versionIdentifier or getVersion /blackberry[\d]+/

            when test /(web|hpw)os/i
                name: 'WebOS'
                webos: true
                version: versionIdentifier or getVersion /w(?:eb)?osbrowser/

            when test /bada/i
                name: 'Bada'
                bada: true
                version: getVersion /dolfin/

            when test /tizen/i
                name: 'Tizen'
                tizen: true
                version: getVersion(/(?:tizen\s?)?browser/) or versionIdentifier

            when test /safari/i
                name: 'Safari'
                safari: true
                version: versionIdentifier

            else { }

        # result modification

        if result.firefox and test /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i
            result.firefoxos = true
        else if result.webos and test /touchpad\//i
            result.touchpad = true

        # webkit / gecko

        if test /(apple)?webkit/i
            result.name = result.name or 'Webkit'
            result.webkit = true
            result.version = result.version or versionIdentifier
        else if not result.opera and test /gecko\//i
            result.name = result.name or 'Gecko'
            result.gecko = true
            result.version = result.version or getVersion /gecko/

        # os flags

        if android or result.silk
            result.android = true
        else if iosdevice
            result.iosdevice = true
            result.ios = true

        # os version

        osversion = switch
            when iosdevice
                firstMatch(/os (\d+([_\s]\d+)*) like mac os x/i)
                    .replace /[_\s]/g, '.'

            when android
                getVersion /android/

            when result.windowsphone
                getVersion /windows phone (?:os)?/

            when result.webos
                getVersion /(?:web|hpw)os/

            when result.blackberry
                getVersion /rim\stablet\sos/

            when result.bada
                getVersion /bada/

            when result.tizen
                getVersion /tizen/

            else ''

        if osversion
            result.osversion = osversion

        # device type

        osmajor = osversion.split('.')[0]
        if tablet or iosdevice is 'ipad' or (android and
        (osmajor is 3 or (osmajor is 4 and not mobile))) or result.silk
            result.tablet = true
        else if mobile or iosdevice in ['iphone', 'ipod'] or android or
        result.blackberry or result.webos or result.bada
            result.mobile = true

        # version breakdown
        if result.version
            breakdown = result.version.match /\d+/g
            result.major = Number breakdown[0] if breakdown.length > 0
            result.minor = Number breakdown[1] if breakdown.length > 1
            result.patch = Number breakdown[2] if breakdown.length > 2
            result.build = Number breakdown[3] if breakdown.length > 3

        return result

    ) navigator.userAgent or ''

    core.registerExtension
        browser: self
