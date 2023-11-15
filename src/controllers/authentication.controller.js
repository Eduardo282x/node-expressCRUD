import { getConnection }  from '../database/database'

const getUsers = async (req, res) =>{
    try {
        const { UserName, UserPassword } = req.body;
        const User = { UserName, UserPassword,}
        const connection = await getConnection();
        const result = await connection.query(`SELECT * FROM users WHERE UserName='${UserName}' and UserPassword='${UserPassword}'`);
        // console.log(result);
        if(result.length > 0){
            res.json({message:'Bienvenido', success: true, userData: result[0]});
        } else {
            res.json({message:'Usuario no encontrado', success: false});
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getUsers
};