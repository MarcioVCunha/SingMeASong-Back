import * as musicRepository from '../repositories/music.js';

const downvote = async (id) => {
  const music = await musicRepository.selectSingleMusicById(id);
  let musicStatus;

  if (!music) return (404);

  if (music.votes <= -5) {
    musicStatus = await musicRepository.deleteMusic(id);
    return (musicStatus);
  }

  musicStatus = await musicRepository.downvote(music.id, music.votes);
  return (musicStatus);
};

export { downvote };