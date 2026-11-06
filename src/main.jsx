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
        <div style={{ padding: '40px 20px', maxWidth: '640px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', textAlign: 'center', backgroundColor: '#faf9f6', border: '1px solid #e7e5e4', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '40px', marginBottom: '8px' }}>🇩🇪</div>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1c1917', marginBottom: '10px' }}>
            DeutschMeister A2 • Restauración de Sesión
          </h2>
          <p style={{ fontSize: '14px', color: '#78716c', marginBottom: '20px', lineHeight: 1.6 }}>
            Se actualizó la plataforma. Haz clic abajo para recargar o restablecer tu sesión.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: '12px 24px', backgroundColor: '#d97706', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}
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
          {this.state.error && (
            <details style={{ marginTop: '24px', textAlign: 'left', fontSize: '11px', color: '#a8a29e', background: '#f5f5f4', padding: '12px', borderRadius: '8px', overflow: 'auto' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Detalles técnicos del error</summary>
              <pre style={{ marginTop: '8px', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                {this.state.error.toString()}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
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
