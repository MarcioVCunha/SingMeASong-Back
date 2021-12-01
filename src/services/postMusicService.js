import * as musicRepository from '../repositories/musicRepository.js';

const addMusic = async (name, link) => {
  let musicAdded = 409;

  const isMusicRepeated = await musicRepository.selectSingleMusic(link);

  if (isMusicRepeated === undefined) {
    musicAdded = await musicRepository.sendMusicToDatabase(name, link);
  }

  return (musicAdded);
};

export { addMusic };