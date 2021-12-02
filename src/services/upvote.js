import * as musicRepository from '../repositories/music.js';

const upvote = async (id) => {
  const music = await musicRepository.selectSingleMusicById(id);

  console.log(music);

  const upvoteAdded = await musicRepository.upvote(id, music.votes);

  return (upvoteAdded);
};

export { upvote };