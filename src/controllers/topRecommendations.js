import * as topService from '../services/topRecommendations.js';

const getTopXMusics = async (req, res) => {
  const amount = req.params.amount;

  const topMusics = await topService.topRecommendarions(amount);

  return (res.status(200).send(topMusics));
};

export { getTopXMusics };