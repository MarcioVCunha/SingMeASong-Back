import * as getRecommendation from '../services/getRecommendation.js';

const getRandomMusic = async (req, res) => {
  const randomMusic = await getRecommendation.getRandomMusic();

  return (res.status(200)).send(randomMusic);
};

export { getRandomMusic };