import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Page not found
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Go Home
      </button>
    </div>
  );
}