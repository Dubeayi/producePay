var data = require('./seedData.js');
var db = require('./');

//write the seeded data to the index.js file
  const seederFunction = () => {
    // data.forEach((data) => {
    //   db.create(data);
    // });
    console.log(data)
  };

  seederFunction();
