import pool from '../configs/connectDB';

let getAllUsers = async (req, res) => {
    const [rows] = await pool.execute('select * from user')
    return res.status(200).json({
        message: 'ok',
        data: rows,
    })
}
let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params',
        })
    }

    await pool.execute(`insert into user(firstName,lastName,email,address) values(?,?,?,?)`, [firstName, lastName, email, address])
    return res.status(200).json({
        message: 'ok',
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
};
