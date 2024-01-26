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

const updateInventory = async (req, res) =>{
    try {
        const { Id } = req.params; 
        const { Description, Amount } = req.body;
        const UpdateInventory = { Description, Amount };
        const connection = await getConnection();
        const result = await connection.query('UPDATE inventory set ? WHERE Id = ?', [UpdateInventory, Id]);
        console.log(result);
        res.json({message: 'Articulo Editado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
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
    updateInventory,
    deleteInventory
};