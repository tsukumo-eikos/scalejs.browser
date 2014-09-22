Browser
===

About
---

Adds browser detection as a scalejs extension.

Version 1.0 only supports select browsers:
Chrome, Firefox, Safari, MSIE

Version 2.0 supports many browsers (see api):

API
---
<pre><code>
core.browser:
    name:           {String}   [Title case name of browser]
    version:        {String}   [major.minor?.patch?.build?]
    osversion:      {String?}  [major.minor?.patch?.build?]
    major:          {Number?}  [major]
    minor:          {Number?}  [minor]
    patch:          {Number?}  [patch]
    build:          {Number?}  [build]
    webkit:         {Boolean?} [true]
    gecko:          {Boolean?} [true]
    opera:          {Boolean?} [true]
    windowsphone:   {Boolean?} [true]
    msie:           {Boolean?} [true]
    chrome:         {Boolean?} [true]
    sailfish:       {Boolean?} [true]
    seamonkey:      {Boolean?} [true]
    firefox:        {Boolean?} [true]
    silk:           {Boolean?} [true]
    phantom:        {Boolean?} [true]
    blackberry:     {Boolean?} [true]
    webos:          {Boolean?} [true]
    bada:           {Boolean?} [true]
    tizen:          {Boolean?} [true]
    safari:         {Boolean?} [true]
    firefoxos:      {Boolean?} [true]
    touchpad:       {Boolean?} [true]
    webkit:         {Boolean?} [true]
    gecko:          {Boolean?} [true]
    android:        {Boolean?} [true]
    ios:            {Boolean?} [true]
    iosdevice:      {Boolean?} [true]
    tablet:         {Boolean?} [true]
    mobile:         {Boolean?} [true]
</code></pre>

Author
---
tsukumo <tsukumo.code+eikos(at)gmail.com>

