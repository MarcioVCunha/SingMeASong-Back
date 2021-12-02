import * as getRecommendation from '../services/getRecommendation.js';

const getRandomMusic = async (req, res) => {
  const randomMusic = await getRecommendation.getRandomMusic();

  if (randomMusic === 404) return (res.sendStatus(404));

  return (res.status(200)).send(randomMusic);
};

export { getRandomMusic };