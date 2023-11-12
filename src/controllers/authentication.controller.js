import { getConnection }  from '../database/database'

const getUsers = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT UserName, UserPassword FROM users');
    res.json(result);
}

export const methods = {
    getUsers
};