/* eslint-disable no-undef */
import * as musicRepository from '../repositories/music.js';
import * as upvoteService from '../services/upvote.js';

describe('Upvote music test', () => {
  it('Should return 404 if music does not exist', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicById').mockImplementationOnce(() => false);

    const result = await upvoteService.upvote();

    expect(result).toEqual(404);
  });

  it('Should return 200 if music is upvoted', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicById').mockImplementationOnce(() => true);
    jest.spyOn(musicRepository, 'upvote').mockImplementationOnce(() => 200);

    const result = await upvoteService.upvote();

    expect(result).toEqual(200);
  });
});