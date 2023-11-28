import { getConnection }  from '../database/database'

const getReserve = async (req, res) =>{
    const { IdProfesor } = req.body;
    const connection = await getConnection();
    if(IdProfesor != 1){
        const result = await connection.query(`SELECT reserve.Id, users.Name, inventory.Description, reserve.Uses, reserve.HourStart, reserve.HourEnd FROM reserve left join inventory on reserve.IdInventario = inventory.Id left join users on reserve.IdProfesor = users.id where reserve.IdProfesor = ${IdProfesor}`);
        res.json(result);
    } else {
        const resultAdmin = await connection.query('SELECT reserve.Id, users.Name, inventory.Description, reserve.Uses, reserve.HourStart, reserve.HourEnd FROM reserve left join inventory on reserve.IdInventario = inventory.Id left join users on reserve.IdProfesor = users.id');
        res.json(resultAdmin);
    }
}

const addReserve = async (req, res) =>{
    const { IdProfesor, IdInventario, Uses, HourStart, HourEnd} = req.body;
    const newReserve = { IdProfesor, IdInventario, Uses, HourStart, HourEnd }
    const connection = await getConnection();
    const result = await connection.query('INSERT INTO reserve set ?', newReserve);
    // res.json(result);
    res.json({message: 'Reserva Agregado'});
}

const deleteReserve = async (req, res) =>{
    try {
        const { Id } = req.params;
        const connection = await getConnection();
        const result =  await connection.query('DELETE FROM reserve WHERE Id = ?', Id);
        console.log(result);
        res.json({message: 'Reserva Eliminado'});
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

export const methods = {
    getReserve,
    addReserve,
    deleteReserve
};