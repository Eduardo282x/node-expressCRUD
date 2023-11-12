import { getConnection }  from '../database/database'

const getUsers = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT users.Id, users.Name, users.Lastname, users.UserName, users.UserPassword, roles.Rol as Rol FROM users join roles on users.Rol = roles.id');
        res.json(result);
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

const addUsers = async (req, res) =>{
    try {
        const { Name, Lastname, UserName, UserPassword,Rol} = req.body;
        const newUser = { Name, Lastname,UserName,UserPassword,Rol}
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
        const { Name, Lastname, UserName, UserPassword, Rol } = req.body;
        const UpdateUser = { Name, Lastname,UserName,UserPassword,Rol}
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
    updateUsers
};