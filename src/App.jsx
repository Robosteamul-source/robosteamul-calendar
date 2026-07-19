import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

function App() {
  const [now, setNow] = useState(new Date());
  const [vkUser, setVkUser] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    bridge.send('VKWebAppInit', {});
    bridge.send('VKWebAppGetUserInfo')
      .then((data) => setVkUser(data))
      .catch((error) => console.error('VK Bridge error:', error));
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
  });

  return (
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
        <h2 style={{ fontSize: '22px', margin: '0 0 8px 0' }}>
          Здравствуйте, {vkUser ? vkUser.first_name : '...'}!
        </h2>

        <p style={{ fontSize: '13px', opacity: 0.65, margin: '0 0 16px 0', textTransform: 'capitalize' }}>
          📅 {formattedDate} · 🕐 {formattedTime}
        </p>

        {vkUser && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img
              src={vkUser.photo_200}
              alt={vkUser.first_name}
              style={{ width: '36px', height: '36px', borderRadius: '50%' }}
            />
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.85 }}>
              Вы вошли как {vkUser.first_name} {vkUser.last_name}
            </p>
          </div>
        )}

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
