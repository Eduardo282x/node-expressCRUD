import { getConnection }  from '../database/database'
// import { Jwt } from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
const secretKey = 'my_secret_key';

const getUsers = async (req, res) =>{
    try {
        const { UserName, UserPassword } = req.body;
        const User = { UserName, UserPassword,}
        const connection = await getConnection();
        const result = await connection.query(`SELECT users.Id, users.Name, users.Lastname, users.UserName, users.Rol, roles.Rol as RolDes FROM users join roles on users.Rol = roles.Id WHERE UserName='${UserName}' and UserPassword='${UserPassword}'`);
        // console.log(result);
        if(result.length > 0){
            const parseJsonString = JSON.stringify(result[0])
            try{
                const plainObject = JSON.parse(parseJsonString);
                const token = jwt.sign(plainObject, secretKey, {
                    expiresIn: '2m'
                });
                res.json({message:'Bienvenido', success: true, userData: token});
            }
            catch(ex){
                console.log(ex);
            }

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