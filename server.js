const http = require("http");
const mongodb = require("mongodb");

let  db;
const connectionString = "mongodb+srv://jahon:pXt6N7kiqHsegnlN@cluster0.psp1ub1.mongodb.net/Reja?retryWrites=true&w=majority";
mongodb.connect(connectionString, {
useNewUrlParser: true,
useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running succsessfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
});

