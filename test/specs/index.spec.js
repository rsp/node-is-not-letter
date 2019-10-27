const isNotLetter = require('../../index');

it('should return false for single letter', () => {
    const input = isNotLetter('x');
    const output = false;
    expect(input).toEqual(output);
});

it('should return true for word', () => {
    const input = isNotLetter('json');
    const output = true;
    expect(input).toEqual(output);
});

it('should return false for polish letters', () => {
    const input = [
        'ę',
        'ó',
        'ł',
        'ś',
        'ą',
        'ż',
        'ź',
        'ć',
        'ń',
    ];

    input.forEach((item) => {
        const input = isNotLetter(item);
        const output = false;
        expect(input).toEqual(output);
    });
});

it('should return false for german letters', () => {
    const input = [
        'ä',
        'ö',
        'ü'
    ];

    input.forEach((item) => {
        const input = isNotLetter(item);
        const output = false;
        expect(input).toEqual(output);
    });
});
