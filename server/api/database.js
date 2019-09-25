// db
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const database = {
  storeUserInfo: function (info, done){
      // data 저장하기
      db.get('users')
          .push(info)
          .write();

      done(null, info);
  }
};

module.exports = database;

