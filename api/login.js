const express = require('express');
const router = express.Router();

router.route('/login')
    .get((req,res,next) => {
        const username = "admin";
        const password = "123456";
        if (req.query.username === username && req.query.password)
        console.log(req.query);
        res.status(200).json({
            status: 1,
            data:{
                username:username
            },
            message: '登录成功'
        })
}) else {
    res.status(200).json({
        status: 0,
        data:{
            username: req.query.username
        },
        message: '登陆失败'
    })

module.exports = router;