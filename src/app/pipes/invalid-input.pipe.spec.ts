import { InvalidInputPipe } from './invalid-input.pipe';

describe('InvalidInputPipe', () => {
  it('create an instance', () => {
    const pipe = new InvalidInputPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "Invalid input." when the input is falsy', () => {
    const pipe = new InvalidInputPipe();
    const input: unknown = undefined;
    const result = pipe.transform(input);
    expect(result).toBe('Invalid input.');
  });

  it('should return the input when it is truthy', () => {
    const pipe = new InvalidInputPipe();
    const input = 500;
    const result = pipe.transform(input);
    expect(result).toEqual(input);
  });
});
