
define ['scalejs!core', 'scalejs!application'], ({browser}) ->

    # For deeper testing, pass to the console

    console.log 'core.browser: ', browser

    describe 'core.browser', () ->

        it 'is defined', () ->

            expect(browser).toBeDefined()

        it 'has a name', () ->

            expect(browser.name).toBeDefined()

        it 'name is a string', () ->

            expect(typeof browser.name).toBe('string')

        it 'has a version', () ->

            expect(browser.version).toBeDefined()

        it 'version is a string', () ->

            expect(typeof browser.version).toBe('string')

        it 'has a major version', () ->

            expect(browser.major).toBeDefined()

        it 'major version is a number', () ->

            expect(typeof browser.major).toBe('number')

        it 'defines a minor version', () ->

            expect(browser.hasOwnProperty('minor')).toBe(true)

        it 'defines a patch version', () ->

            expect(browser.hasOwnProperty('patch')).toBe(true)

        it 'defines a build version', () ->

            expect(browser.hasOwnProperty('build')).toBe(true)

        it 'has a webkit test', () ->

            expect(browser.webkit).toBeDefined()

        it 'webkit test is a boolean', () ->

            expect(typeof browser.webkit).toBe('boolean')

        it 'defines a webkit version', () ->

            expect(browser.hasOwnProperty('webkit_version')).toBe(true)

