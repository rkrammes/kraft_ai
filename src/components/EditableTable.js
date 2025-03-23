

// @flow
import React, { useState } from 'react';

type TableRow = {
  id: number,
  ingredient: string,
  quantity: string,
  unit: string,
  notes: string,
};

function EditableTable(): React$Node {
  const [rows, setRows] = useState<TableRow[]>([
    { id: 1, ingredient: 'Distilled Water', quantity: '1 cup', unit: '(240 mL)', notes: '' },
    { id: 2, ingredient: 'Liquid Castile Soap', quantity: '2 tablespoons', unit: '(30 mL)', notes: '' },
  ]);

  const handleInputChange = (id: number, field: string, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleAddRow = () => {
    const newId = rows.length ? rows[rows.length - 1].id + 1 : 1;
    setRows((prev) => [
      ...prev,
      { id: newId, ingredient: '', quantity: '', unit: '', notes: '' },
    ]);
  };

  const handleDeleteRow = (id: number) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  return (
    <div className="card">
      <h2>Editable Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.ingredient}
                  onChange={(e) =>
                    handleInputChange(row.id, 'ingredient', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.quantity}
                  onChange={(e) =>
                    handleInputChange(row.id, 'quantity', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.unit}
                  onChange={(e) =>
                    handleInputChange(row.id, 'unit', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.notes}
                  onChange={(e) =>
                    handleInputChange(row.id, 'notes', e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} style={{ marginTop: '1rem' }}>
        Add Row
      </button>
    </div>
  );
}

export default EditableTable;