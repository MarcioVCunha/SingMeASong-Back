import * as downvoteService from '../services/downvote.js';

const downvote = async (req, res) => {
  const downvoteStatus = await downvoteService.downvote(req.params.id);

  return res.sendStatus(downvoteStatus);
};

export { downvote };