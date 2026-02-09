import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ 
      textAlign: 'center', 
      padding: '4rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem'
    }}>
      <h1 style={{ 
        fontSize: '2.8rem', 
        fontWeight: '600',
        color: '#1976d2'
      }}>
        Welcome to Our Store
      </h1>
      
      <p style={{ 
        fontSize: '1.15rem', 
        color: '#6c757d',
        maxWidth: '600px',
        lineHeight: 1.7
      }}>
        Discover high-quality products designed for everyday life. 
        Browse our collection and find your next favorite item.
      </p>

      <Link
        to="/products"
        style={{
          marginTop: '1rem',
          padding: '0.8rem 2rem',
          backgroundColor: '#1976d2',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '1.1rem',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1565c0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1976d2'}
      >
        Browse Products →
      </Link>
    </div>
  );
}