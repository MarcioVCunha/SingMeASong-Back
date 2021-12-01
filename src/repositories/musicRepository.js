import connection from '../database/database.js';

const selectSingleMusic = async (link) => {
  try {
    const singleMusic = await connection.query(`
      SELECT
        *
      FROM
        musics
      WHERE
        link = $1;
    `, [link]);

    return (singleMusic.rows[0]);
  } catch (error){
    return (500);
  }
};

const sendMusicToDatabase = async (name, link) => {
  try {
    await connection.query(`
      INSERT INTO
        musics (name, link)
      VALUES
        ($1, $2);
    `, [name, link]);

    return (200);
  } catch {
    return (500);
  }
};

export { sendMusicToDatabase, selectSingleMusic };