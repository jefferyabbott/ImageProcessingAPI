import { validateQueryString } from '../services/queryChecker';

describe('Validate Query String', () => {
  it('expect empty string array if all arguments are valid', () => {
    const filename = 'test.jpg';
    const width = 200;
    const height = 200;
    expect(validateQueryString(filename, width, height).length).toEqual(0);
  });

  it('expect warning if filename not provided', () => {
    let filename: unknown;
    const height = 200;
    const width = 200;
    expect(validateQueryString(filename as string, height, width)[0]).toEqual(
      'filename is required'
    );
  });

  it('expect warning if height not provided', () => {
    const filename = 'test.jpg';
    let height: unknown;
    const width = 200;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'height is required'
    );
  });

  it('expect warning if height is negative', () => {
    const filename = 'test.jpg';
    const height = -1;
    const width = 200;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'height must be greater than zero'
    );
  });

  it('expect warning if height is 0', () => {
    const filename = 'test.jpg';
    const height = 0;
    const width = 100;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'height must be greater than zero'
    );
  });

  it('expect warning if width not provided', () => {
    const filename = 'test.jpg';
    const height = 200;
    let width: unknown;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'width is required'
    );
  });

  it('expect warning if width is negative', () => {
    const filename = 'test.jpg';
    const height = 50;
    const width = -100;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'width must be greater than zero'
    );
  });

  it('expect warning if width is 0', () => {
    const filename = 'test.jpg';
    const height = 50;
    const width = 0;
    expect(validateQueryString(filename, height, width)[0]).toEqual(
      'width must be greater than zero'
    );
  });
});
