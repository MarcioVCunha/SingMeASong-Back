import * as musicRepository from '../repositories/music.js';

const upvote = async (id) => {
  const music = await musicRepository.selectSingleMusicById(id);

  if (!music) return (404);

  const upvoteAdded = await musicRepository.upvote(id, music.votes);

  return (upvoteAdded);
};

export { upvote };