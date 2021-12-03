/* eslint-disable no-undef */
import * as musicRepository from '../repositories/music.js';
import * as topRecommendationsService from '../services/topRecommendations.js';

describe('Get top recommendations test', () => {
  it('should return a list with the top musics', async () => {
    jest.spyOn(musicRepository, 'getTopXMusics').mockImplementationOnce(() => {
      return ['list of musics'];
    });

    const result = await topRecommendationsService.topRecommendarions();

    expect(result).toEqual(['list of musics']);
  });
});