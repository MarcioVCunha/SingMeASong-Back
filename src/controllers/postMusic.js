import * as validation from '../validation/youtubeURLValidation.js';
import * as musicService from '../services/postMusic.js';

const postMusic = async (req, res) => {
  const { name, youtubeLink } = req.body;

  const isUrlOk = validation.validateYoutubeURL(youtubeLink);

  if (!isUrlOk || !(typeof (name) === 'string')) return res.sendStatus(400);

  const musicAdded = await musicService.addMusic(name, youtubeLink);

  res.sendStatus(musicAdded);
  return;
};

export { postMusic };