import Author from '../types/author.type';
import db from '../database/index';
class authormodel {
  async create(a: Author): Promise<Author> {
    try {
      const connection = await db.connect();
      const sql =
        'INSERT INTO author (firstname,secondname,biography) values ($1,$2,$3) returning *';
      const result = await connection.query(sql, [
        a.firstname,
        a.secondname,
        a.biography,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${a.firstname}): ${(error as Error).message}`
      );
    }
  }
  async GetAll(): Promise<Author[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM author';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to GetAll authors : ${(error as Error).message}`);
    }
  }
}
export default authormodel;
