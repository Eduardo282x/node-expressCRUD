import { getConnection }  from '../database/database'

const getInventory = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT inventory.Id, inventory.Description, inventory.Amount, aulas.Aula AS Classroom, users.Name as Professor, inventory.Date  FROM inventory left join aulas on inventory.Classroom = aulas.Id left join users on inventory.Professor = users.Id');
    res.json(result);
}

const addInventory = async (req, res) =>{
    const { Description, Amount} = req.body;
    const newArticle = { Description, Amount}
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO inventory set ?', newArticle);
    // res.json(result);
    res.json({message: 'Articulo Agregado'});
}

const deleteInventory = async (req, res) =>{
    try {
        const { Id } = req.params;
        const connection = await getConnection();
        const result =  await connection.query('DELETE FROM inventory WHERE Id = ?', Id);
        console.log(result);
        res.json({message: 'Articulo Eliminado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getInventory,
    addInventory,
    deleteInventory
};