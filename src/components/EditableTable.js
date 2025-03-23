

// @flow
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

type TableRow = {
  id: number,
  ingredient: string,
  quantity: string,
  unit: string,
  notes: string,
};

function EditableTable(): React$Node {
  const [rows, setRows] = useState<TableRow[]>([]);
  
  // Fetch data from Supabase on mount
  useEffect(() => {
    const fetchIngredients = async () => {
      const { data, error } = await supabase
        .from('Ingredients')
        .select('*')
        .order('id', { ascending: true });
      if (error) {
        console.error('Error fetching ingredients:', error);
      } else if (data) {
        // Convert Supabase rows to our TableRow format
        const mappedRows = data.map((item) => ({
          id: item.id,
          ingredient: item.name || '',
          quantity: item.quantity || '',
          unit: item.unit || '',
          notes: item.notes || '',
        }));
        setRows(mappedRows);
      }
    };
    fetchIngredients();
  }, []);

  const handleInputChange = (id: number, field: string, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
    // Update Supabase immediately whenever a field changes
    supabase
      .from('Ingredients')
      .update({ [field === 'ingredient' ? 'name' : field]: value })
      .eq('id', id)
      .then(({ error }) => {
        if (error) {
          console.error('Error updating ingredient:', error);
        }
      });
  };

  const handleAddRow = async () => {
    // Insert a new row in Supabase
    const { data, error } = await supabase
      .from('Ingredients')
      .insert([{ name: '', quantity: '', unit: '', notes: '' }])
      .select()
      .single();
    if (error) {
      console.error('Error adding ingredient:', error);
    } else if (data) {
      setRows((prev) => [
        ...prev,
        {
          id: data.id,
          ingredient: data.name,
          quantity: data.quantity,
          unit: data.unit,
          notes: data.notes,
        },
      ]);
    }
  };

  const handleDeleteRow = async (id: number) => {
    // Delete from Supabase
    const { error } = await supabase
      .from('Ingredients')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Error deleting ingredient:', error);
    } else {
      setRows((prev) => prev.filter((row) => row.id !== id));
    }
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