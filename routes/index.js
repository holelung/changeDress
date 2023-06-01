var express = require('express');
var router = express.Router();

global.moment=require("moment")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/board', async function(req, res, rows){
  var[rows]= await connection.query("select * from board order by id desc")
  
  res.render('board',{board: rows})
})

router.get('/write', function(req, res){
  res.render('write')
})

router.post('/api/write', async function(req,res,rows){
  console.log(req.body)
  await connection.query("insert into board(title, content, imageFile) values(?,?,?)",
    [req.body.title, req.body.content, req.body.imageFile])


  res.redirect('/board')
})

router.get('/board/view/:id', async function(req,res,rows){
  var [boardView] = await connection.query("select * from board where id=?",[req.params.id])

  console.log(boardView)
  res.render('board_view', {boardView: boardView})
})


module.exports = router;
