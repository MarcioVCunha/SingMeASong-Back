import * as musicRepository from '../repositories/music.js';

const topRecommendarions = async (amount) => {
  const topMusics = await musicRepository.getTopXMusics(amount);

  return (topMusics);
};

export { topRecommendarions };