import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function ProductList() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem'
    }}>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            backgroundColor: 'ButtonHighlight',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: '1.5rem'
          }}
        >
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            {product.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: '600', color: 'var(--primary)' }}>
              ${product.price.toFixed(2)}
            </span>
            <Link
              to={`/products/${product.id}`}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}