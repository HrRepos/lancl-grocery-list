// Use doc: npm install (https://www.npmjs.com/package/mysql)

// Step 1: connect to db
const mysql = require('mysql');


// Note: exporting module does not work here (work at the bottom)
// module.exports = {
// Done: set up mysql, for user as 'root'
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  //'me',
    // password: 'secret',
    database: 'grocery_list'
});

// Connection can be implicitly established, by invoking a query
// connection.connect();

// Step 2: function that gets all groceries from table
const getAllGroceries = function(whenGroceries) {
    connection.query('SELECT * FROM groceries;', function(error, results, fields){
        if(error) {
            whenGroceries(error);
            // throw error;
        } else {
            whenGroceries(null, results);
        }
    })
};

// Define callback function inside, when invoking it
// getAllGroceries(function(error, groceries) {
//     console.log(groceries);
// });

// Step 3: function that inserts one grocery into table
// Note: keep cb function within conneciton.query() for error catching, even though no info is needed from the DB table
// Note: escaping helps to note have SQL executed as JS (security wise); by using [] and ?
const addOneGrocery = function(item, whenAdded) {
    connection.query(`INSERT INTO groceries (name, quantity) VALUES (?, ?);`, [item.name, item.quantity], function(error, results, fields){
        if(error) {
            whenAdded(error);
        } else {
            whenAdded(null);
        }
    })
};

// Define callback function inside, when invoking it
// addOneGrocery({name: 'egg', quantity: 5}, function(error){
//     if(error) {
//         console.log('something went wrong', error)
//     } else {
//         console.log('item added');
//     }
// });
// }

module.exports.getAllGroceries = getAllGroceries;
module.exports.addOneGrocery = addOneGrocery;
