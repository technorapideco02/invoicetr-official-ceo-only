import { useState } from 'react';
import Header from './components/Header';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';

function App() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    currency: '$',
    billFrom: {
      name: 'TECHNORAPIDE',
      email: 'business@technorapide.com',
      address: '123 Tech Street\nInnovation City, TC 90210',
      gst: '',
      registrationNumber: ''
    },
    billTo: {
      name: '',
      email: '',
      address: '',
      gst: '',
      registrationNumber: ''
    },
    items: [
      { id: 1, description: 'Web Development Services', quantity: 1, price: 1000.00 }
    ],
    taxRate: 0
  });

  const handleInputChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        { id: Date.now(), description: '', quantity: 1, price: 0 }
      ]
    }));
  };

  const handleRemoveItem = (id) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const handleUpdateItem = (id, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleCurrencyChange = (newCurrency) => {
    setInvoiceData(prev => ({ ...prev, currency: newCurrency }));
  };

  const handleTaxRateChange = (newRate) => {
    setInvoiceData(prev => ({ ...prev, taxRate: newRate }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <Header />

      <div className="invoice-layout" style={{
        display: 'grid',
        gridTemplateColumns: '1fr', // Mobile first
        gap: '3rem', // Increased gap for better separation
        alignItems: 'start'
      }}>
        {/* Helper for responsive grid */}
        <style>{`
          @media (min-width: 1024px) {
            .invoice-layout {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>

        <div className="no-print">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Editor</h2>
            <button
              onClick={handlePrint}
              style={{
                background: 'var(--color-primary)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-full)', // Pill shape
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid transparent',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              PDF / Print
            </button>
          </div>

          <InvoiceForm
            data={invoiceData}
            onChange={handleInputChange}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
            onUpdateItem={handleUpdateItem}
            onCurrencyChange={handleCurrencyChange}
            onTaxRateChange={handleTaxRateChange}
          />

          <div style={{
            background: '#eff6ff',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            color: '#1e40af',
            fontSize: '0.875rem'
          }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Tip:</strong>
            Use the browser's "Save as PDF" option in the print dialog to download your invoice.
          </div>
        </div>

        <div className="preview-section">
          <div style={{ marginBottom: '1rem', fontWeight: 'bold' }} className="no-print">Live Preview</div>
          <div style={{ overflowX: 'auto', paddingBottom: '2rem' }}> {/* Scroll for mobile */}
            <InvoicePreview data={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
