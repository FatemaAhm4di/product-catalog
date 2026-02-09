import { Outlet } from 'react-router-dom';

export default function ProductsLayout() {
  return (
    <div className="container">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Products</h1>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        Browse our collection of high-quality items.
      </p>
      
      {/* فضای فیلتر (placeholder) */}
      <div style={{
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px dashed var(--border-color)'
      }}>
        <em>Filter area will go here (optional for this assignment)</em>
      </div>

      <Outlet />
    </div>
  );
}