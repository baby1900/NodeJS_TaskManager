const { calculateTip, add } = require('../src/math')


test('Hello world!', () => {
    const total = calculateTip(10, 0.3)
    expect(calculateTip(10, 0.3)).toBe(13)
})

// test('async', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })


// test('Thia ahould fail', () => {
//     throw new Error('FAILED')
// })

test('Should add to numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('async', async () => {
    const sum = await add(2,3)
    expect(sum).toBe(5)
})