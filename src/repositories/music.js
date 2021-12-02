import connection from '../database/database.js';

const getAllMusics = async () => {
  try {
    const allMucis = await connection.query(`
      SELECT
        *
      FROM
        musics;
     `);

    return (allMucis);
  } catch {
    return (500);
  }
};

const selectSingleMusicByLink = async (link) => {
  try {
    const singleMusic = await connection.query(`
      SELECT
        *
      FROM
        musics
      WHERE
        "youtubeLink" = $1;
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

const getTopXMusics = async (amount) => {
  try {
    console.log(amount);

    const topMusics = await connection.query(`
      SELECT
        *
      FROM
        musics
      ORDER BY
        score
      DESC LIMIT $1;
    `, [amount]);

    return (topMusics.rows);
  } catch (error) {
    console.log(error);
    return (500);
  }
};

const getAllMusicsLittleVoteCount = async () => {
  try {
    const littleVoteMuscis = await connection.query(`
      SELECT
        *
      FROM
        musics
      WHERE
        score <= 10
    `);

    return (littleVoteMuscis.rows);
  } catch {
    return (500);
  }
};

const getAllMusicsBigVoteCount = async () => {
  try {
    const BigVoteMusics = await connection.query(`
      SELECT
        *
      FROM
        musics
      WHERE
        score > 10
    `);

    return (BigVoteMusics.rows);
  } catch {
    return (500);
  }
};

const sendMusicToDatabase = async (name, link) => {
  try {
    await connection.query(`
      INSERT INTO
        musics (name, "youtubeLink")
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
        score = $1
      WHERE
        id = $2;
    `, [voteCount + 1, id]);

    return (200);
  } catch (error) {
    return (500);
  }
};

const downvote = async (id, voteCount) => {
  try {
    await connection.query(`
      UPDATE 
        musics
      SET
        score = $1
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

export {
  getAllMusics,
  selectSingleMusicByLink,
  selectSingleMusicById,
  getTopXMusics,
  getAllMusicsLittleVoteCount,
  getAllMusicsBigVoteCount,
  sendMusicToDatabase,
  upvote,
  downvote,
  deleteMusic
};