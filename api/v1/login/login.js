const express = require('express')
const router = express.Router();
const client = require("../../../pg/pg");

const queryUser = 'SELECT * FROM public.user WHERE username = $1 AND password = $2';
router.post('/', (req, res) => {
    console.log("req",req.body)
    const values = [req.body.username, req.body.password]
    client.query(queryUser, values, (err, result) => {
        console.log("ciao")
        if (err) {
            console.error(err);
            return res.status(500).send("Error " + err);
        } else {
            console.log("male")
            console.log(result)
            return res.status(200).json({ username: result.rows[0].username})
        }
    })


    // try{
    //     const client = await pool.connect();
    //     const result = await client.query()
    // }

}
);


module.exports = router