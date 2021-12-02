import * as musicRepository from '../repositories/music.js';

const addMusic = async (name, link) => {
  let musicAdded = 409;

  const isMusicRepeated = await musicRepository.selectSingleMusicByLink(link);

  if (isMusicRepeated === undefined) {
    musicAdded = await musicRepository.sendMusicToDatabase(name, link);
  }

  return (musicAdded);
};

export { addMusic };