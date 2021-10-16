const i18n = require("./i18n")
// @ponicode
describe("i18n.defaultLanguage", () => {
    test("0", () => {
        let callFunction = () => {
            i18n.defaultLanguage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("i18n.loadLocaleFrom", () => {
    test("0", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom("ru", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom("cn", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom("ru", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom("de", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom("en", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            i18n.loadLocaleFrom(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
