import db from '../database/index';
import order from '../types/order.type';
class ordermodel {
  async create(o: order): Promise<order> {
    try {
      // open connection with DB
      const connection = await db.connect();
      const sql = `INSERT INTO orders (book_id,purchase_id,quantity)
          values ($1, $2, $3) returning id,book_id,purchase_id,quantity`;
      // run query
      const result = await connection.query(sql, [
        o.book_id,
        o.purchase_id,
        o.quantity,
      ]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${o.id}): ${(error as Error).message}`
      );
    }
  }
  // get all order
  async getMany(): Promise<order[]> {
    try {
      const connection = await db.connect();
      const sql =
        'SELECT orders.id,quantity ,book.price,users.firstname,purchase_id,book.title,purchase.date from orders FULL JOIN purchase ON purchase.id =orders.purchase_id INNER JOIN users ON users.id=purchase.user_id INNER JOIN book ON book.id=orders.book_id';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving orders ${(error as Error).message}`);
    }
  }

  // get specific order
  async getOne(id: string): Promise<order> {
    try {
      const sql = `SELECT orders.id,quantity,book.price ,users.firstname,purchase_id,book.title,purchase.date from orders FULL JOIN purchase ON purchase.id =orders.purchase_id INNER JOIN users ON users.id=purchase.user_id INNER JOIN book ON book.id=orders.book_id
          WHERE orders.id=($1)`;

      const connection = await db.connect();

      const result = await connection.query(sql, [id]);

      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find order ${id}, ${(error as Error).message}`
      );
    }
  }

  // update user
  // async updateOne(o: order): Promise<order> {
  //   try {
  //     const connection = await db.connect();
  //     const sql = `UPDATE orders
  //                     SET  book_id=$1,quantity=$2
  //                     WHERE id=$3
  //                     RETURNING *`;

  //     const result = await connection.query(sql, [o.book_id, o.quantity]);
  //     connection.release();
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(
  //       `Could not update order: ${o.id}, ${(error as Error).message}`
  //     );
  //   }
  // }

  // delete order
  async deleteOne(id: string): Promise<order> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM orders 
                      WHERE id=($1) `;

      const result = await connection.query(sql, [id]);

      connection.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete orders ${id}, ${(error as Error).message}`
      );
    }
  }
}
export default ordermodel;
