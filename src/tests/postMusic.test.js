/* eslint-disable no-undef */
import * as musicRepository from '../repositories/music.js';
import * as addService from '../services/postMusic.js';

describe('Add music test', () => {
  it('Should return 409 if music is repeated', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicByLink').mockImplementationOnce(() => {
      return ({
        name: 'not undfined'
      });
    });

    const result = await addService.addMusic();

    expect(result).toEqual(409);
  });

  it('Should return 200 if music is added', async () => {
    jest.spyOn(musicRepository, 'selectSingleMusicByLink').mockImplementationOnce(() => undefined);
    jest.spyOn(musicRepository, 'sendMusicToDatabase').mockImplementationOnce(() => 200);

    const result = await addService.addMusic();

    expect(result).toEqual(200);
  });
});