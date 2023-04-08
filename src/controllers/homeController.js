import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { data: rows })
}
let getDetailPage = async (req, res) => {
    let userId = req.params.userId
    let [user] = await pool.execute(`select * from user where id = ?`, [userId])
    res.send(JSON.stringify(user))
}
let createUser = async (req, res) => {
    console.log("creating");
    let { firstName, lastName, email, address } = req.body
    await pool.execute(`insert into user(firstName,lastName,email,address) values(?,?,?,?)`, [firstName, lastName, email, address])
    return res.redirect('/')
}

module.exports = {
    getHomePage,
    getDetailPage,
    createUser
};
