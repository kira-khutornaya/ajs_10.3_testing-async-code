import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (err) {
    console.error(err);
    return false; // строка для ESLint
  }
})();
