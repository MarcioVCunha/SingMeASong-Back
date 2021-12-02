import connection from '../database/database.js';

const selectSingleMusicByLink = async (link) => {
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
  } catch (error) {
    return (500);
  }
};

const selectSingleMusicById = async (id) => {
  try {
    const singleMusic = await connection.query(`
      SELECT
        *
      FROM
        musics
      WHERE
        id = $1;
    `, [id]);

    return (singleMusic.rows[0]);
  } catch (error) {
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

const upvote = async (id, voteCount) => {
  try {
    await connection.query(`
      UPDATE 
        musics
      SET
        votes = $1
      WHERE
        id = $2;
    `, [voteCount + 1, id]);

    return (200);
  } catch {
    return (500);
  }
};

const downvote = async (id, voteCount) => {
  try {
    await connection.query(`
      UPDATE 
        musics
      SET
        votes = $1
      WHERE
        id = $2;
    `, [voteCount - 1, id]);

    return (200);
  } catch {
    return (500);
  }
};

const deleteMusic = async (id) => {
  try {
    await connection.query(`
      DELETE FROM
        musics
      WHERE
        id = $1;
    `, [id]);

    return (200);
  } catch {
    return (500);
  }
};

export { sendMusicToDatabase, selectSingleMusicByLink, selectSingleMusicById, upvote, downvote, deleteMusic };