const express = require('express');
const { EventEmitter } = require('events');
const router = express.Router();
const eventEmitter = new EventEmitter();

// 버튼 클릭 핸들러 등록
router.get('/button-click', (req, res) => {
  // 이벤트 발생
  eventEmitter.emit('buttonClick', { data: '버튼 클릭 이벤트 발생' });
  res.send('버튼 클릭 이벤트를 발생시켰습니다.');
});

// 이벤트 리스너 등록
eventEmitter.on('buttonClick', (data) => {
  console.log('버튼 클릭 이벤트:', data);
});

module.exports = router;
