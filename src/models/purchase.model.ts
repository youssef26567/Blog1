import db from '../database/index';
import purchase from '../types/purchase.type';
class pruchasemodel {
  async create(p: purchase): Promise<purchase> {
    try {
      // open connection with DB
      const connection = await db.connect();
      const sql = `INSERT INTO purchase (user_id,address,date)
          values ($1, $2, $3) returning id,user_id,address,date`;
      // run query
      const result = await connection.query(sql, [
        p.user_id,
        p.address,
        p.data,
      ]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${p.id}): ${(error as Error).message}`
      );
    }
  }
  // get all users
  async getMany(): Promise<purchase[]> {
    try {
      const connection = await db.connect();
      const sql =
        'SELECT purchase.id, user.user_id,address,date from purchase INNER JOIN users ON  purchase.user_id=users.id';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Error at retrieving pruchase ${(error as Error).message}`
      );
    }
  }

  // get specific user
  async getOne(id: string): Promise<purchase> {
    try {
      const sql = `SELECT id, email, firstname, secondname FROM users 
          WHERE id=($1)`;

      const connection = await db.connect();

      const result = await connection.query(sql, [id]);

      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find user ${id}, ${(error as Error).message}`);
    }
  }

  // update user
  async updateOne(p: purchase): Promise<purchase> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE users 
                      SET purchase.id=$1, user_id=$2,address=$3,date=$4
                      WHERE id=$5
                      RETURNING *`;

      const result = await connection.query(sql, [
        p.user_id,
        p.address,
        p.data,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update user: ${p.user_id}, ${(error as Error).message}`
      );
    }
  }

  // delete user
  async deleteOne(id: string): Promise<purchase> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM purchase 
                      WHERE id=($1) `;

      const result = await connection.query(sql, [id]);

      connection.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete purchase ${id}, ${(error as Error).message}`
      );
    }
  }
}
export default pruchasemodel;
