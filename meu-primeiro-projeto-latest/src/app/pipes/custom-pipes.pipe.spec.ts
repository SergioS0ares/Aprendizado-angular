import { CustomStringPipe } from './custom-pipes.pipe';

describe('CustomPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomStringPipe();
    expect(pipe).toBeTruthy();
  });
});
