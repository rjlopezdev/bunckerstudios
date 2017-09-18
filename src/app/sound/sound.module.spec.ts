import { SoundModule } from './sound.module';

describe('SoundModule', () => {
  let soundModule: SoundModule;

  beforeEach(() => {
    soundModule = new SoundModule();
  });

  it('should create an instance', () => {
    expect(soundModule).toBeTruthy();
  });
});
