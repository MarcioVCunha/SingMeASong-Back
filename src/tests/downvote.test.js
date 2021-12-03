/* eslint-disable no-undef */
import * as musicRepository from '../repositories/music.js';
import * as downvoteService from '../services/downvote.js';

describe('Downvote music test', () => {
  it('Should return 404 if music does not exist', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicById').mockImplementationOnce(() => false);

    const result = await downvoteService.downvote();

    expect(result).toEqual(404);
  });

  it('Should return 200 for downvote done', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicById').mockImplementationOnce(() => {
      return {
        score: 10
      };
    });
    jest.spyOn(musicRepository, 'downvote').mockImplementationOnce(() => 200);

    const result = await downvoteService.downvote();

    expect(result).toEqual(200);
  });

  it('Should return 200 for downvote done and music deletion', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicById').mockImplementationOnce(() => {
      return {
        score: -6
      };
    });
    jest.spyOn(musicRepository, 'deleteMusic').mockImplementationOnce(() => 200);

    const result = await downvoteService.downvote();

    expect(result).toEqual(200);
  });
});