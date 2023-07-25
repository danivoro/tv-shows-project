import cleanString from "./cleanString"

test('cleanString passes basic tests', () => {
    expect(cleanString('<p>Lord Eddard Stark.</p>'))
    .toEqual('Lord Eddard Stark.');
})
