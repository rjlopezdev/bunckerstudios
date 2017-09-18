import { InstrumentalsModule } from './instrumentals.module';

describe('InstrumentalsModule', () => {
  let instrumentalsModule: InstrumentalsModule;

  beforeEach(() => {
    instrumentalsModule = new InstrumentalsModule();
  });

  it('should create an instance', () => {
    expect(instrumentalsModule).toBeTruthy();
  });
});
