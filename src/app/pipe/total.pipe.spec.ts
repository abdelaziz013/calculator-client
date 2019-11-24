import { TotalPipe } from './total.pipe';

describe('TotalPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPipe();
    expect(pipe).toBeTruthy();
  });


  it('should convert value to "The addition result: ${value}"', () => {
    const pipe = new TotalPipe();
    expect(pipe.transform(13)).toBe(`"The addition result: 13"`);
  });
});
