import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('deutschmeister_a2_progress');
    } catch (_) {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', textAlign: 'center', backgroundColor: '#faf9f6', border: '1px solid #e7e5e4', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1c1917', marginBottom: '12px' }}>
            🇩🇪 DeutschMeister A2 • Restauración de Sesión
          </h2>
          <p style={{ fontSize: '14px', color: '#78716c', marginBottom: '24px', lineHeight: 1.6 }}>
            Se detectó una discrepancia en el almacenamiento local del navegador tras actualizar los módulos. Haz clic abajo para recargar la aplicación limpiamente.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: '12px 24px', backgroundColor: '#f59e0b', color: '#0c0a09', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Recargar Página 🔄
            </button>
            <button
              onClick={this.handleReset}
              style={{ padding: '12px 24px', backgroundColor: '#1c1917', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Restablecer Almacenamiento Local 🧹
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>,
)
