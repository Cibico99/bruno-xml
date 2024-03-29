const parser = require('../src/dotenvToJson');

describe('DotEnv File Parser', () => {
  test('it should parse a simple key-value pair', () => {
    const input = `FOO=bar`;
    const expected = { FOO: 'bar' };
    const output = parser(input);
    expect(output).toEqual(expected);
  });

  test('it should parse a simple key-value pair with empty lines', () => {
    const input = `
FOO=bar

`;
    const expected = { FOO: 'bar' };
    const output = parser(input);
    expect(output).toEqual(expected);
  });

  test('it should parse multiple key-value pairs', () => {
    const input = `
FOO=bar
BAZ=2
BEEP=false
`;
    const expected = {
      FOO: 'bar',
      BAZ: 2,
      BEEP: false
    };
    const output = parser(input);
    expect(output).toEqual(expected);
  });

  test('it should handle leading and trailing whitespace', () => {
    const input = `
  SPACE  =  value
`;
    const expected = { SPACE: 'value' };
    const output = parser(input);
    expect(output).toEqual(expected);
  });
});
