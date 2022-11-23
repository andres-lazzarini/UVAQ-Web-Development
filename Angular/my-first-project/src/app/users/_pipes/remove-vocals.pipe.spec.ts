import { RemoveVocalsPipe } from './remove-vocals.pipe';

describe('RemoveVocalsPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveVocalsPipe();
    expect(pipe).toBeTruthy();
  });
});
