// joke.js
// Берём случайную шутку про программирование
const URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

// Главная асинхронная функция
async function getJoke() {
  const res = await fetch(URL);          // ждём ответ сервера
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();         // ждём, пока тело превратится в объект
  return data.joke;                      // строка-шутка
}

// Запуск
(async () => {
  try {
    const joke = await getJoke();
    console.log("Шутка:", joke);
  } catch (err) {
    console.error("Ошибка:", err.message);
  }
})();
