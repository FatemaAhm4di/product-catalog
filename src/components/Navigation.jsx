import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav style={{
      backgroundColor: 'transparent',
      padding: '1rem 0',
      boxShadow: '0 6px 4px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{ display: 'flex', gap: '2rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? 'var(--primary)' : 'var(--text-primary)',
            textDecoration: 'none'
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => ({
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? 'var(--primary)' : 'var(--text-primary)',
            textDecoration: 'none'
          })}
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
}