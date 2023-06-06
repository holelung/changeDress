var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();
var cookieParser = require('cookie-parser');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
  },
});

var upload = multer({storage: storage});

//게시판 용
var storageB = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/board/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
  },
});

var uploadB = multer({storage: storageB});


global.moment=require("moment")



/* // 버튼 클릭 핸들러 등록
router.get('/button-click', (req, res) => {
  // 이벤트 발생
  eventEmitter.emit('buttonClick', { data: '버튼 클릭 이벤트 발생' });
  res.send('버튼 클릭 이벤트를 발생시켰습니다.');
});

// 이벤트 리스너 등록
eventEmitter.on('buttonClick', (data) => {
  console.log('버튼 클릭 이벤트:', data);
}); */




/* GET home page. */
router.get('/', async function(req, res, next) {
  var[rows]= await connection.query("select * from images where category=?","hair")

  var a=rows[0].category;
  console.log(a);
  res.render('index',{images:rows, row:a});
});

/** 카테고리 선택 */
//머리카락
router.post('/api/hair', async function(req, res, rows){
  var[rows]= await connection.query("select * from images where category=?", [req.body.category])
  
  var a=rows[0].category;
  console.log(a);
  res.render('index',{images:rows, row:a});
});
//안경
router.post('/api/glass', async function(req, res, rows){
  var[rows]= await connection.query("select * from images where category=?", [req.body.category])

  var a=rows[0].category;
  console.log(a);
  res.render('index',{images:rows, row:a});
});
//악세서리
router.post('/api/accessory', async function(req, res, rows){
  var[rows]= await connection.query("select * from images where category=?", [req.body.category])
  
  var a=rows[0].category;
  console.log(a);
  res.render('index',{images:rows, row:a});
});
//옷
router.post('/api/clothes', async function(req, res, rows){
  var[rows]= await connection.query("select * from images where category=?", [req.body.category])

  var a=rows[0].category;
  console.log(a);
  res.render('index',{images:rows, row:a});
});

/**아이템 업로드 */
router.post('/api/add',upload.single("img"), async function(req, res, rows){
  console.log(req.body);

  await connection.query("insert into images(img, category) values(?,?)",[`/images/${req.file.filename}`, req.body.category])
  
  res.redirect('/');
})



router.get('/board', async function(req, res, rows){
  var[rows]= await connection.query("select * from board order by id desc")
  
  res.render('board',{board: rows})
})

router.get('/write', function(req, res){
  res.render('write')
})

router.post('/api/write', uploadB.single("image"),async function(req,res,rows){
  await connection.query("insert into board(title, content, imageFile) values(?,?,?)",
    [req.body.title, req.body.content, `/images/board/${req.file.filename}`])

  console.log(req.body)
  res.redirect('/board')
})

router.get('/board/view/:id', async function(req,res,rows){
  var [boardView] = await connection.query("select * from board where id=?",[req.params.id])
  //조회수 증가
  await connection.query("update board set views = views+1 where id=?",[req.params.id])
  
  /* var id = boardView.id
  var title = boardView.title
  res.cookie({id}, {title}, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,ßß
    secure: true
  }); */

  console.log(boardView)
  res.render('board_view', {boardView: boardView})
})

//좋아요 버튼





/** 좋아요 버튼 (실패작) */
/* app.post('/increase-query-count/:id', (req, res) => {
  // DB에 쿼리 증가 로직 수행
  connection.query('UPDATE board SET views = views + 1 where id=?',[req.params.id], (err, result) => {
    if (err) {
      console.error('쿼리 증가 실패:', err);
      res.sendStatus(500);
    } else {
      queryCount++;
      res.json({ count: queryCount });
    }
  });
});
 */
module.exports = router;
