const express = require('express')
const router=express.Router();

//라우터는 미들웨어에서 정해준 url가 있다.
router.get('/:id',(req,res)=>{
    res.send('Received a GET request, param : '+req.params.id)
})

router.post('/',(req,res)=>{
    res.json({success :true})
})

router.put('/',(req,res)=>{
    res.status(400).json({message : 'HEY, you. Bad Request!!'})
})

router.delete('/',(req,res)=>{
    res.send('Received a DELETE request')
})
//라우터 모듈화
module.exports=router;