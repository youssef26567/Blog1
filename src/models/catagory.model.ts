import Catagory from '../types/catagory.type';
import db from '../database/index';
import { GetMany } from '../controllers/blog.controller';
class catagorymodel {
  async create(c: Catagory): Promise<Catagory> {
    try {
      // open connection with DB
      const connection = await db.connect();
      const sql = 'INSERT INTO catagory (name) values ($1) returning id,name';
      // run query
      const result = await connection.query(sql, [c.name]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${c.name}): ${(error as Error).message}`
      );
    }
  }
  async GetMany(): Promise<Catagory[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM catagory ';
      // run query
      const result = await connection.query(sql);
      // release connection
      connection.release();
      // return created user
      return result.rows;
    } catch (error) {
      throw new Error(
        `Unable to find the catagorys : ${(error as Error).message}`
      );
    }
  }
}
export default catagorymodel;
