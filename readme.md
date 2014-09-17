Browser
===

About
---

Adds browser detection as a scalejs extension.

Version 1.0 only supports select browsers:
Chrome, Firefox, Safari, MSIE

Later versions will support a wider range of browsers.

API
---
<pre><code>
core.browser:
    name: [‘chrome’, ‘firefox’, ‘safari’, ‘msie’, undefined]
    version: ‘XX.YY.ZZ.WW’
    major: XX
    minor: [YY, undefined]
    patch: [ZZ, undefined]
    build: [WW, undefined]
    webkit: [true, false] # if built on webkit
    webkit_version: [‘XXX.YYY’ or undefined]
</code></pre>

Author
---
tsukumo <tsukumo.code+eikos(at)gmail.com>

