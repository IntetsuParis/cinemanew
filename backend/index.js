require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;
const SECRET_API_KEY = process.env.SECRET_API_KEY;

console.log("API_KEY:", API_KEY);
console.log("SECRET_API_KEY:", SECRET_API_KEY);

app.post("/create-paylink", async (req, res) => {
  const requestData = {
    name: "Payment of movie",
    description: "Please, pay for access",

    pricingCurrency: "6340313846e4f91b8abc519b",
    currency: "USDC",
    recipients: [
      {
        currencyId: "6340313846e4f91b8abc519b",
        walletId: "6670b6fe409ebf97fc370835",
      },
    ],
    price: "1000000",
    network: "test",
    features: {},
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SECRET_API_KEY}`,
    },
    params: {
      apiKey: API_KEY,
    },
  };

  try {
    const response = await axios.post(
      "https://api.hel.io/v1/paylink/create/api-key",
      requestData,
      config
    );
    res.json({ id: response.data.id });
  } catch (error) {
    console.error("Ошибка при создании платёжной ссылки:", error);
    res.status(500).json({ error: "Произошла ошибка при создании Pay Link" });
  }
});

app.listen(3001, () => {
  console.log("Сервер запущен на порту 3001");
});
