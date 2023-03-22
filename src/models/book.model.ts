import db from '../database/index';
import book from '../types/book.type';
class BlogModel {
  async create(b: book): Promise<book> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO book (author_id,catagory_id,title,isbn,discription,price)
      values ($1, $2, $3, $4,$5,$6) returning id,author_id,catagory_id,title,isbn,discription,price`;
      const result = await connection.query(sql, [
        b.author_id,
        b.catagory_id,
        b.title,
        b.isbn,
        b.discription,
        b.price,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${b.id}): ${(error as Error).message}`
      );
    }
  }
  // async UpdateOne(b: blog): Promise<blog> {
  //   try {
  //     const connection = await db.connect();
  //     const sql = `UPDATE  blog  SET content=$1, auther=$2, title=$3
  //     WHERE id=($4) returning id,content, auther, title`;
  //     const result = await connection.query(sql, [
  //       b.auther,
  //       b.content,
  //       b.title,
  //     ]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(
  //       `Unable to update (${b.auther}): ${(error as Error).message}`
  //     );
  //   }
  // }
  async GetMany(): Promise<book[]> {
    try {
      const connection = await db.connect();
      const sql =
        'SELECT book.id,title,isbn,discription,price,author.firstname,author.secondname,catagory.name FROM (( book INNER JOIN author ON book.author_id=author.id ) INNER JOIN catagory ON book.catagory_id=catagory.id)';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable to find : ${(error as Error).message}`);
    }
  }
  async GetOne(id: string): Promise<book> {
    try {
      const connection = await db.connect();
      const sql =
        'SELECT book.id,title,isbn,discription,price,author.firstname,author.secondname,catagory.name FROM (( book INNER JOIN author ON book.author_id=author.id ) INNER JOIN catagory ON book.catagory_id=catagory.id) WHERE book.id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable to find: ${(error as Error).message}`);
    }
  }
  async delete(id: string): Promise<book> {
    try {
      const connection = await db.connect();
      const sql = 'DELETE FROM book  WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete book ${id}, ${(error as Error).message}`
      );
    }
  }
}
export default BlogModel;
