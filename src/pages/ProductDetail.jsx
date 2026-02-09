import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{product.name}</h1>
        <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.25rem', marginBottom: '1rem' }}>
          ${product.price.toFixed(2)}
        </p>
        <p><strong>Category:</strong> {product.category}</p>
        <p style={{ marginTop: '1rem' }}>{product.description}</p>
      </div>
    </div>
  );
}