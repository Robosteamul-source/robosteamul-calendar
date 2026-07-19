import React from 'react';

function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'Arial', background: '#f5f7fb', minHeight: '100vh' }}>
      <h1>Личный кабинет родителя</h1>
      <h2>RoboSTEAMuL</h2>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '20px' }}>
        <h3>👧 Ребёнок</h3>
        <p><b>Имя:</b> Иван Иванов</p>
        <p><b>Группа:</b> Робототехника 5–7 лет</p>
      </div>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}>
        <h3>📅 Расписание</h3>
        <p>Вторник — 18:00</p>
        <p>Четверг — 18:00</p>
      </div>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}>
        <h3>💳 Оплата</h3>
        <p><b>Статус:</b> оплачено ✅</p>
        <p><b>Следующая оплата:</b> 10 июня</p>
      </div>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}>
        <h3>🏆 Достижения</h3>
        <p>Собрал первого робота</p>
        <p>Прошёл модуль «Механизмы»</p>
      </div>

      <button onClick={() => window.open('https://vk.ru/im?sel=-192923833', '_blank')} style={{
        width: '100%',
        padding: '16px',
        marginTop: '24px',
        borderRadius: '14px',
        border: 'none',
        background: '#111827',
        color: 'white',
        fontSize: '18px'
      }}>
        Связаться с администратором
      </button>
    </div>
  );
}

export default App;