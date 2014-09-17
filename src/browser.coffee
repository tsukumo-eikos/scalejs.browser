
# global require

require ['scalejs!core'], (core) ->

    ua = navigator.userAgent

    # NOTE: chrome must always come before safari because it has the word
    #       safari in its user agent

    name = switch
        when /firefox/i.test ua then 'firefox'
        when /chrome/i.test  ua then 'chrome'
        when /safari/i.test  ua then 'safari'
        when /msie/i.test    ua then 'msie'

    version = switch
        when name is 'firefox'
            ua.match(/firefox[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1]
        when name is 'chrome'
            ua.match( /chrome[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1]
        when name is 'safari'
            ua.match(/version[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1]
        when name is 'msie'
            ua.match(   /msie[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1]

    version_breakdown = version.match /\d+/g

    webkit = /webkit/i.test ua
    webkit_version = ua.match(/webkit[/ ](([a-z\d]+\.)+[a-z\d]+)/i)[1] if webkit

    core.registerExtension
        browser:
            name: name
            version: version
            major: Number(version_breakdown[0])
            minor: Number(version_breakdown[1])
            patch: Number(version_breakdown[2])
            build: Number(version_breakdown[3])
            webkit: webkit
            webkit_version: webkit_version

