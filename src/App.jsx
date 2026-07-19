import React, { useState, useEffect } from 'react';

function App() {
 const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }); return (
    <div style={{ padding: '24px', fontFamily: 'Arial', background: '#f5f7fb', minHeight: '100vh' }}>
      <div style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
          borderRadius: '20px',
          padding: '24px',
          color: 'white',
          marginBottom: '20px'
        }}>
          <p style={{ fontSize: '15px', opacity: 0.8, margin: '0 0 4px 0' }}>
            Добро пожаловать 👋
          </p>
          <h2 style={{ fontSize: '22px', margin: '0 0 20px 0' }}>
            Здравствуйте, Анна!
          </h2><p style={{ fontSize: '13px', opacity: 0.65, margin: '0 0 20px 0', textTransform: 'capitalize' }}>
            📅 {formattedDate} · 🕐 {formattedTime}
          </p>




          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '16px'
          }}>
            <img
              src="/child-photo.jpg"
              alt="Иван Иванов"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #fbbf24'
              }}
            />
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '17px', margin: 0 }}>
                👦 Иван Иванов
              </p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '2px 0 0 0' }}>
                5 лет · РобоСТИМ 5–7 лет
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            gap: '10px'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '10px', flex: 1, textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '18px' }}>🏆 34</p>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>занятия</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '10px', flex: 1, textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '18px' }}>⭐ Инженер</p>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>уровень</p>
            </div>
          </div>

          <p style={{ fontSize: '13px', opacity: 0.75, marginTop: '14px', marginBottom: 0 }}>
            🎖 Следующая награда через 6 занятий
          </p>
        </div>
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
