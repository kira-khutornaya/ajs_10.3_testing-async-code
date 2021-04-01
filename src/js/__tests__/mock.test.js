import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return correctly value', async () => {
  const bufView = new Uint16Array([74, 97, 118, 97, 83, 99, 114, 105, 112, 116]);
  read.mockReturnValue(Promise.resolve(bufView));

  await expect(GameSavingLoader.load()).resolves.toBe('JavaScript');
  // expect(await GameSavingLoader.load()).toBe('JavaScript');
});

test('should catch error', async () => {
  expect.assertions(2);
  read.mockReturnValue(Promise.reject(new Error('Data conversion error occurred')));

  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toBe('Data conversion error occurred');
  }
});
