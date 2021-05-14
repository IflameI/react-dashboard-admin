const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

if (process.env.NODE_ENV === 'production') {
  // Обслуживаем любые статические файлы
  app.use(express.static(path.join(__dirname, 'client / build')));
  // Обработка маршрутизации React, возврат всех запросов в приложение React
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client / build', 'index.html'));
  });
}

app.listen(process.env.PORT || 8080, () => console.log('API is running'));
