import padNumber from "./padNumber";

test('padNumber passes basic tests', () => {
    expect(padNumber(1)).toEqual('01');
    expect(padNumber(17)).toEqual('17');
    expect(padNumber(0)).toEqual('00');
} )
