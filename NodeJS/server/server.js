const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect(
  'mongodb+srv://nick0726:hwani!13085@cluster0.yzv2q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log(error);

    db = client.db('todoapp');
    // db.collection('post').insertOne(
    //   { name: 'John', age: 20 },
    //   (error, result) => {
    //     console.log('더미데이터 DB에 저장 완료');
    //   }
    // );
    app.listen(8080, () => {
      console.log('8080 포트 개방');
    });
  }
);

app.get('/list', (req, res) => {
  db.collection('post')
    .find()
    .toArray((error, result) => {
      console.log(result);
      res.render('list.ejs', { posts: result });
    });
  // DB에 저장된 post라는 collection 내부 모든 데이터를 꺼내주숑
});

app.post('/add', (req, res) => {
  res.send('서버에 전송완료');
  console.log(req.body.title);
  console.log(req.body.date);
  db.collection('counter').findOne({ name: '게시물갯수' }, (error, result) => {
    console.log(result.totalPost);
    var 총게시물갯수 = result.totalPost;
    db.collection('post').insertOne(
      { _id: 총게시물갯수 + 1, Title: req.body.title, Date: req.body.date },
      (error, result) => {
        console.log('DB에 저장완료');
        db.collection('counter').updateOne(
          { name: '게시물갯수' },
          { $inc: { totalPost: 1 } },
          (error, result) => {
            if (error) {
              return console.log(error);
            }
          }
        );
      }
    );
  });
});

app.get('/pet', (req, res) => {
  res.send('펫용품 쇼핑 페이지');
});

app.get('/beauty', (req, res) => {
  res.send('Beauty 쇼핑 페이지');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html');
});

app.post('/add', (req, res) => {
  res.send('전송완료');
  console.log(req.body);
});
