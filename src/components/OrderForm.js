import React, { useState } from 'react';

const OrderForm = () => {
  const [rows, setRows] = useState([{ item: '', quantity: '', unitPrice: '', total: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { item: '', quantity: '', unitPrice: '', total: '' }]);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, [field]: value, total: calculateTotal(value, row.unitPrice) };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleUnitPriceChange = (index, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, unitPrice: value, total: calculateTotal(row.quantity, value) };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const calculateTotal = (quantity, unitPrice) => {
    return (quantity * unitPrice).toFixed(2);
  };

  return (
    <div>
      <div style={{  height: 'auto', background: 'black', padding: '20px' }}>
        <div >
          <div>
            <div style={{ width: '40%' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Item</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Quantity</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Unit Price</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Total</th>
                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <select
                          value={row.item}
                          onChange={(e) => handleChange(index, 'item', e.target.value)}
                          style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                        >
                          <option value="">Select Item</option>
                          <option value="Item 1">Item 1</option>
                          <option value="Item 2">Item 2</option>
                          <option value="Item 3">Item 3</option>
                        </select>
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <input
                          type="number"
                          value={row.quantity}
                          onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                          style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <input
                          type="number"
                          value={row.unitPrice}
                          onChange={(e) => handleUnitPriceChange(index, e.target.value)}
                          style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '10px' }}>{row.total}</td>
                      <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <button
                          onClick={() => setRows(rows.filter((_, i) => i !== index))}
                          style={{
                            padding: '5px 10px',
                            borderRadius: '5px',
                            border: 'none',
                            background: '#FF5733',
                            color: '#fff',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleAddRow}
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  background: '#28a745',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                + Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
