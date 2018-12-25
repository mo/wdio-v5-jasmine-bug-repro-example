describe('webdriver.io page', () => {

    beforeAll(() => {
        console.log("111111111111111111111111111111 beforeAll starting")
        expect(true).toBe(false)
        throw Error('wtf')
        console.log("222222222222222222222222222222 beforeAll ending")
    })
    it('should have the right title', () => {
        console.log("333333333333333333333333333333 testcase starting")
        browser.url('https://webdriver.io');
        expect(true).toBe(false)
        throw "not correct at all"
        console.log("444444444444444444444444444444 testcase ending")
    });
});
