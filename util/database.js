// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;

// // const mongoConnect = callback => {
// //   MongoClient.connect(
// //    'mongodb+srv://mahesh63choudhary:KvrbrBb9H9X40IGL@cluster0.rxbzyva.mongodb.net/?retryWrites=true&w=majority'
// //    )
// //    .then(client => {
// //      console.log('Connected!');
// //      callback(client);
// //    })
// //    .catch(err => {
// //      console.log(err);
    
// //    });
// // };

// // module.exports=mongoConnect;
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback => {
//   MongoClient.connect(
//     'mongodb+srv://mahesh63choudhary:KvrbrBb9H9X40IGL@cluster0.rxbzyva.mongodb.net/?retryWrites=true&w=majority'
//   )
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db();
//       callback();
//     })
//     .catch(err => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
