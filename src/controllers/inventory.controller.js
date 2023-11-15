import { getConnection }  from '../database/database'

const getInventory = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM inventory');
    res.json(result);
}

export const methods = {
    getInventory
};