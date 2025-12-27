import React from 'react';

const InvoicePreview = ({ data }) => {
    const calculateSubtotal = () => {
        return data.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    };

    const subtotal = calculateSubtotal();
    const total = subtotal;

    const renderLegalDetails = (details) => {
        if (!details.gst && !details.registrationNumber) return null;
        return (
            <div style={{ marginTop: '0.25rem', fontSize: '0.7rem', color: '#666' }}>
                {details.registrationNumber && <div>Reg: {details.registrationNumber}</div>}
                {details.gst && <div>GST: {details.gst}</div>}
            </div>
        );
    };

    return (
        <div className="invoice-preview-container">
            {/* Container for the page - allows growth */}
            <div id="invoice-preview" style={{
                background: '#f3f4f6',
                width: '100%',
                maxWidth: '210mm',
                minHeight: '297mm',
                margin: '0 auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                color: '#1f2937',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: "'Inter', sans-serif",
                overflow: 'visible' // Allow fixed elements to break out
            }}>

                {/* REPEATING HEADER */}
                <div className="invoice-header">
                    {/* Dark Header Background */}
                    <div style={{
                        background: '#1a1a1a',
                        color: 'white',
                        padding: '3rem 3rem 6rem 3rem',
                        position: 'relative'
                    }}>
                        {/* Watermark in Header */}
                        <div style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            height: '100%',
                            width: '50%',
                            opacity: '0.1',
                            backgroundImage: 'url(https://technorapide.com/public/logo.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            mixBlendMode: 'overlay'
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: '0.875rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem',
                                    opacity: 0.8
                                }}>
                                    {data.billFrom.name}
                                </div>
                                <h1 style={{
                                    fontSize: '5rem',
                                    fontWeight: '200',
                                    lineHeight: '1',
                                    margin: '1rem 0',
                                    letterSpacing: '-2px'
                                }}>
                                    INVOICE
                                </h1>

                                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '2rem', marginTop: '1.5rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase' }}>Invoice Date:</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '500' }}>{data.date}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase' }}>Invoice No:</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '500' }}>#{data.invoiceNumber || '001'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Info Card */}
                    <div style={{
                        margin: '-4rem 3rem 0 3rem',
                        background: 'white',
                        borderRadius: '1rem',
                        padding: '2rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 1fr 1fr',
                        gap: '2rem',
                        position: 'relative',
                        zIndex: 10,
                        borderBottom: '1px solid #eee' // visual separator
                    }}>
                        {/* Bill To */}
                        <div style={{ borderRight: '1px solid #f3f4f6', paddingRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 'bold' }}>Invoice To:</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>{data.billTo.name || 'Client Name'}</div>
                            {renderLegalDetails(data.billTo)}
                        </div>

                        {/* Address */}
                        <div style={{ borderRight: '1px solid #f3f4f6', paddingRight: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 'bold' }}>Address:</div>
                            <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                                {data.billTo.address || '123 Anywhere St., Any City'}
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contact:</div>
                            <div style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.5' }}>
                                {data.billTo.email}
                                <br />
                                {data.billTo.registrationNumber && `Reg: ${data.billTo.registrationNumber} `}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer block (for print mode only) to push content down below fixed header */}
                <div className="print-header-spacer" style={{ height: '420px', display: 'none' }}></div>

                {/* Content Body */}
                <div className="invoice-body" style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Main Table Container */}
                    <div style={{
                        background: 'white',
                        borderRadius: '1rem',
                        padding: '2rem',
                        border: '1px solid #e5e7eb',
                        marginBottom: '3rem'
                    }}>
                        {/* ... Items Header ... */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '3fr 1fr 1fr 1fr',
                            marginBottom: '1rem',
                            paddingBottom: '1rem',
                            borderBottom: '2px solid #f3f4f6',
                            fontWeight: 'bold',
                            fontSize: '0.875rem'
                        }}>
                            <div>Item Descriptions</div>
                            <div style={{ textAlign: 'right' }}>Price</div>
                            <div style={{ textAlign: 'center' }}>Qty</div>
                            <div style={{ textAlign: 'right' }}>Amount</div>
                        </div>

                        {data.items.map((item, index) => (
                            <div key={item.id} style={{
                                display: 'grid',
                                gridTemplateColumns: '3fr 1fr 1fr 1fr',
                                padding: '1rem 0',
                                borderBottom: index < data.items.length - 1 ? '1px solid #f9fafb' : 'none',
                                alignItems: 'center',
                                fontSize: '1rem'
                            }}>
                                <div style={{ fontWeight: '500' }}>{item.description || 'Item Name'}</div>
                                <div style={{ textAlign: 'right', fontFamily: 'monospace' }}>{data.currency}{item.price.toFixed(2)}</div>
                                <div style={{ textAlign: 'center' }}>{item.quantity}</div>
                                <div style={{ textAlign: 'right', fontWeight: '600', fontFamily: 'monospace' }}>{data.currency}{(item.quantity * item.price).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>

                    {/* Payment & Totals */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
                        <div style={{ flex: 1, paddingRight: '2rem' }}>
                            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1rem' }}>Payment Details</h3>
                            <div style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '100px auto' }}>
                                    <span style={{ color: '#6b7280' }}>Bill From:</span>
                                    <span style={{ fontWeight: '500' }}>{data.billFrom.name}</span>
                                </div>
                                {data.billFrom.gst && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '100px auto' }}>
                                        <span style={{ color: '#6b7280' }}>GSTIN:</span>
                                        <span>{data.billFrom.gst}</span>
                                    </div>
                                )}
                                <div style={{ display: 'grid', gridTemplateColumns: '100px auto' }}>
                                    <span style={{ color: '#6b7280' }}>Email:</span>
                                    <span>{data.billFrom.email}</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '0.5rem' }}>Terms and Conditions</h3>
                                <p style={{ fontSize: '0.875rem', color: '#6b7280', maxWidth: '300px' }}>
                                    Be sure to do the payment within 30 days after receiving this invoice to avoid any penalty charges.
                                </p>
                            </div>
                        </div>

                        <div style={{ width: '300px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1rem', fontWeight: '600' }}>
                                <span>SUBTOTAL</span>
                                <span>{data.currency}{subtotal.toFixed(2)}</span>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '1rem',
                                paddingTop: '1rem',
                                borderTop: '2px solid #e5e7eb',
                                fontSize: '1.25rem',
                                fontWeight: '800'
                            }}>
                                <span>TOTAL</span>
                                <span>{data.currency}{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer block for footer */}
                <div className="print-footer-spacer" style={{ height: '380px', display: 'none' }}></div>


                {/* REPEATING FOOTER */}
                <div className="invoice-fixed-footer">
                    {/* Signature & Stamp Section */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        padding: '1rem 3rem 2rem 3rem',
                        background: '#f3f4f6'
                    }}>
                        {/* Stamp Image - Left Side */}
                        <img
                            src="https://res.cloudinary.com/dslw83bre/image/upload/v1766851999/image-Photoroom_3_xjv0nx.png"
                            alt="Stamp"
                            style={{
                                height: '90px',
                                opacity: 0.9,
                                transform: 'rotate(-5deg)',
                                marginBottom: '0.5rem'
                            }}
                        />

                        {/* Signature Block - Right Side */}
                        <div style={{ textAlign: 'center', width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Payment QR Code - Above Signature */}
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <img
                                    src="https://res.cloudinary.com/dslw83bre/image/upload/v1766852280/e594e8ff-671f-4d4f-86f9-50439b1c4549.png"
                                    alt="Payment QR"
                                    style={{ height: '80px', width: '80px', marginBottom: '0.5rem' }}
                                />
                                <div style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#374151' }}>
                                    Scan to Pay
                                </div>
                            </div>

                            {/* Signature Image */}
                            <img
                                src="https://res.cloudinary.com/dslw83bre/image/upload/v1766851941/image-Photoroom_2_dxd46m.png"
                                alt="Signature"
                                style={{
                                    height: '70px',
                                    marginBottom: '0.25rem',
                                    display: 'block'
                                }}
                            />

                            {/* CEO Title */}
                            <div style={{
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                letterSpacing: '0.05em',
                                color: '#1f2937'
                            }}>
                                CEO TECHNORAPIDE
                            </div>
                        </div>
                    </div>

                    {/* Footer Bar */}
                    <div style={{
                        background: '#1a1a1a',
                        color: 'white',
                        padding: '1.5rem 3rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.75rem',
                        letterSpacing: '0.05em'
                    }}>
                        <div style={{ fontWeight: 'bold' }}>CONTACT US</div>
                        <div>{data.billFrom.email} | technorapide.com</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InvoicePreview;
