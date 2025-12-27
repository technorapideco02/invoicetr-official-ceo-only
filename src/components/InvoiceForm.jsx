import React from 'react';

const InvoiceForm = ({ data, onChange, onAddItem, onRemoveItem, onUpdateItem, onCurrencyChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(name, value);
    };

    const handleBillToChange = (e) => {
        const { name, value } = e.target;
        onChange('billTo', { ...data.billTo, [name]: value });
    };

    const handleBillFromChange = (e) => {
        const { name, value } = e.target;
        onChange('billFrom', { ...data.billFrom, [name]: value });
    };

    return (
        <div style={{
            background: 'var(--color-surface)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: 'var(--shadow-glass)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Invoice Details</h2>

            {/* Global Settings: Currency & Tax */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.5)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.5)'
                }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Currency</label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="currency"
                                value="$"
                                checked={data.currency === '$'}
                                onChange={() => onCurrencyChange('$')}
                            />
                            USD ($)
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="currency"
                                value="₹"
                                checked={data.currency === '₹'}
                                onChange={() => onCurrencyChange('₹')}
                            />
                            INR (₹)
                        </label>
                    </div>
                </div>


            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Invoice Number</label>
                    <input
                        type="text"
                        name="invoiceNumber"
                        value={data.invoiceNumber}
                        onChange={handleChange}
                        placeholder="INV-001"
                        style={{ width: '100%' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={data.date}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                {/* Bill From */}
                <div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', color: 'var(--color-primary)' }}>Bill From</h3>
                    <input
                        type="text"
                        name="name"
                        value={data.billFrom.name}
                        onChange={handleBillFromChange}
                        placeholder="Company Name"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={data.billFrom.email}
                        onChange={handleBillFromChange}
                        placeholder="Email"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <textarea
                        name="address"
                        value={data.billFrom.address}
                        onChange={handleBillFromChange}
                        placeholder="Address"
                        rows="3"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />

                    <label style={{ display: 'block', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>Legal Details (Optional)</label>
                    <input
                        type="text"
                        name="gst"
                        value={data.billFrom.gst}
                        onChange={handleBillFromChange}
                        placeholder="Our GSTIN"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <input
                        type="text"
                        name="registrationNumber"
                        value={data.billFrom.registrationNumber}
                        onChange={handleBillFromChange}
                        placeholder="Our Registration No."
                        style={{ width: '100%' }}
                    />
                </div>

                {/* Bill To */}
                <div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', color: 'var(--color-primary)' }}>Bill To</h3>
                    <input
                        type="text"
                        name="name"
                        value={data.billTo.name}
                        onChange={handleBillToChange}
                        placeholder="Client Name"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={data.billTo.email}
                        onChange={handleBillToChange}
                        placeholder="Client Email"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <textarea
                        name="address"
                        value={data.billTo.address}
                        onChange={handleBillToChange}
                        placeholder="Client Address"
                        rows="3"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />

                    <label style={{ display: 'block', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>Legal Details (Optional)</label>
                    <input
                        type="text"
                        name="gst"
                        value={data.billTo.gst}
                        onChange={handleBillToChange}
                        placeholder="Client GSTIN"
                        style={{ width: '100%', marginBottom: '0.75rem' }}
                    />
                    <input
                        type="text"
                        name="registrationNumber"
                        value={data.billTo.registrationNumber}
                        onChange={handleBillToChange}
                        placeholder="Client Registration No."
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.items.map((item, index) => (
                    <div key={item.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 0.7fr 1fr 0.3fr', // More space for description and price, less for delete
                        gap: '0.75rem',
                        alignItems: 'end',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.6)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255,255,255,0.5)'
                    }}>
                        <div>
                            <label style={{ fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block' }}>Description</label>
                            <input
                                type="text"
                                value={item.description}
                                onChange={(e) => onUpdateItem(item.id, 'description', e.target.value)}
                                placeholder="Item description"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block' }}>Qty</label>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => onUpdateItem(item.id, 'quantity', parseFloat(e.target.value))}
                                min="1"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.875rem', marginBottom: '0.25rem', display: 'block' }}>Price</label>
                            <input
                                type="number"
                                value={item.price}
                                onChange={(e) => onUpdateItem(item.id, 'price', parseFloat(e.target.value))}
                                min="0"
                                step="0.01"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <button
                            onClick={() => onRemoveItem(item.id)}
                            style={{
                                height: '38px',
                                background: '#fee2e2',
                                color: '#ef4444',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            &times;
                        </button>
                    </div>
                ))}

                <button
                    onClick={onAddItem}
                    style={{
                        marginTop: '1rem',
                        padding: '0.75rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: '600'
                    }}
                >
                    + Add Item
                </button>
            </div>
        </div>
    );
};

export default InvoiceForm;
