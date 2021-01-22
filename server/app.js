const express = require("express");
const app = express();
const request = require("request");
const PORT = process.env.PORT || 8080;
const cors = require("cors");

const corsOptions = {
  origin: "https://digital-destiny.netlify.app",
};
app.use(cors(corsOptions));

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get("/", (req, res) => {
  res.send("YOO");
});

app.get("/getCoins", (req, res) => {
  request(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1y%2C%2024h",
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const parsedBody = JSON.parse(body);

        res.send(parsedBody);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
