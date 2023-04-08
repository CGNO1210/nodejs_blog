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
let deleteUser = async (req, res) => {
    await pool.execute('delete from user where id = ?', [req.body.userId])
    return res.redirect('/')
}
let editUser = async (req, res) => {
    let id = req.params.userId
    let [user] = await pool.execute('select * from user where id = ?', [id])
    return res.render('update.ejs', { user: user[0], id })
}
let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    await pool.execute('update user set firstName =?,lastName=?,email=?,address=? where id=?', [firstName, lastName, email, address, id])
    return res.redirect("/")
}
module.exports = {
    getHomePage,
    getDetailPage,
    createUser,
    deleteUser,
    editUser,
    updateUser
};
