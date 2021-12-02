import * as upvoteService from '../services/upvote.js';

const upvote = async (req, res) => {
  const { id } = req.params;

  const upvoteAdded = await upvoteService.upvote(id);

  return res.sendStatus(upvoteAdded);
};

export { upvote };