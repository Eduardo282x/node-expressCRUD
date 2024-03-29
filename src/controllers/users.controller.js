import { getConnection }  from '../database/database'

const getUsers = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT users.Id, users.Name, users.Lastname, users.UserName, users.UserPassword, roles.Rol as Rol FROM users join roles on users.Rol = roles.id where users.Rol  != 1');
        res.json(result);
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const addUsers = async (req, res) =>{
    try {
        const { Name, Lastname, UserName} = req.body;
        const newUser = { Name, Lastname, UserName}
        newUser.Rol = 2;
        newUser.UserPassword = 123;
        const connection = await getConnection();
        await connection.query('INSERT INTO users set ?', newUser);
        res.json({message: 'Usuario Agregado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const updateUsers = async (req, res) =>{
    try {
        const { Id } = req.params; 
        const { Name, Lastname, UserName } = req.body;
        const UpdateUser = { Name, Lastname, UserName };
        const connection = await getConnection();
        const result = await connection.query('UPDATE users set ? WHERE Id = ?', [UpdateUser, Id]);
        console.log(result);
        res.json({message: 'Usuario Editado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}
const updateOneUser = async (req, res) =>{
    try {
        const { Id } = req.params; 
        const { Name ,Lastname ,UserName , UserPassword } = req.body;
        const UpdateOneUser = { Name, Lastname, UserName, UserPassword };
        const connection = await getConnection();
        const result = await connection.query('UPDATE users set ? WHERE Id = ?', [UpdateOneUser, Id]);
        console.log(result);
        res.json({message: 'Usuario Actualizado.'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const deleteUsers = async (req, res) =>{
    try {
        const { Id } = req.params;
        const connection = await getConnection();
        const result =  await connection.query('DELETE FROM users WHERE Id = ?', Id);
        console.log(result);
        res.json({message: 'Usuario Eliminado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}


export const methods = {
    getUsers,
    addUsers,
    deleteUsers,
    updateOneUser,
    updateUsers,
};