import { getConnection }  from '../database/database'

const getRoles = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM roles');
    res.json(result);
}

export const methods = {
    getRoles
};