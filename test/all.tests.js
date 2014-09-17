require.config({
    paths: {
        boot: '../lib/jasmine/boot',
        'jasmine-html': '../lib/jasmine/jasmine-html',
        jasmine: '../lib/jasmine/jasmine',
        'browser': '../build/browser'
    },
    shim: {
        jasmine: {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: [
                'jasmine'
            ],
            exports: 'window.jasmineRequire'
        },
        boot: {
            deps: [
                'jasmine',
                'jasmine-html'
            ],
            exports: 'window.jasmineRequire'
        }
    },
    scalejs: {
        extensions: [
            'browser'
        ]
    }
});

require(['boot'], function () {
    require ([
        '../test/browser.test'
    ], function () {
        window.onload();
    });
});
