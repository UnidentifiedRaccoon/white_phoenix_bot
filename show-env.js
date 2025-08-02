// show-env.js
import "dotenv/config";             // 1 строка – подключили dotenv

console.log("Токен Telegram:", process.env.TELEGRAM_TOKEN);
console.log("Ключ Yandex:", process.env.YANDEX_API_KEY);

