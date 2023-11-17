import { getConnection }  from '../database/database'

const getInventory = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('SELECT inventory.Id, inventory.Description, inventory.Amount, aulas.Aula AS Classroom, users.Name as Professor, inventory.Date  FROM inventory left join aulas on inventory.Classroom = aulas.Id left join users on inventory.Professor = users.Id');
    res.json(result);
}

const addInventory = async (req, res) =>{
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO inventory');
    res.json(result);
}

export const methods = {
    getInventory,
    addInventory
};