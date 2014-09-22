
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

