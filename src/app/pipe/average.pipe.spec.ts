import { AveragePipe } from './average.pipe';

describe('AveragePipe', () => {
  it('create an instance', () => {
    const pipe = new AveragePipe();
    expect(pipe).toBeTruthy();
  });


it('convert value to "The average is ${value}"', () => {
    const pipe = new AveragePipe();
    expect(pipe.transform('13')).toBe(`"The average is 13"`);
  });


});
