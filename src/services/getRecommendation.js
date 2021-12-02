import * as musicRepository from '../repositories/music.js';

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomMusic = async (req, res) => {
  let randomMusicList = [];
  let prob = 1;

  const allMusics = await musicRepository.getAllMusics();
  
  if (allMusics.rowCount === 0) return (404);

  while (!randomMusicList[0]) {
    prob = Math.random();

    if (prob > 0.3) {
      randomMusicList = await musicRepository.getAllMusicsBigVoteCount();
    } else {
      randomMusicList = await musicRepository.getAllMusicsLittleVoteCount();
    }
  }

  return (randomMusicList[randomInt(0, randomMusicList.length)]);
};

export { getRandomMusic };