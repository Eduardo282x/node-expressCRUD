import { getConnection }  from '../database/database'

const getInventory = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM inventory');
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