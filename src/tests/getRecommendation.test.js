/* eslint-disable no-undef */
import * as getRecommendationService from '../services/getRecommendation.js';
import * as musicRepository from '../repositories/music.js';

describe('Get recommendations test', () => {
  it('Should return 404 if there is no music', async () => {
    jest.spyOn(musicRepository, 'getAllMusics').mockImplementationOnce(() => {
      return ({
        rowCount: 0
      });
    });

    const result = await getRecommendationService.getRandomMusic();

    expect(result).toEqual(404);
  });

  it('Should return the music if a music exists', async () => {
    jest.spyOn(musicRepository, 'getAllMusics').mockImplementationOnce(() => {
      return ({
        rowCount: 1
      });
    });
    jest.spyOn(musicRepository, 'getAllMusicsBigVoteCount').mockImplementationOnce(() => ['music']);
    jest.spyOn(musicRepository, 'getAllMusicsLittleVoteCount').mockImplementationOnce(() => ['music']);

    const result = await getRecommendationService.getRandomMusic();

    expect(result).toEqual('music');
  });
});