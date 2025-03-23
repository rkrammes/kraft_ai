/* style.css from your old DIY_Recipes repository */

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #1a1a1a;
  color: #ccc;
}

.dark-mode {
  background-color: #111;
  color: #eee;
}

header {
  background: #222;
  padding: 10px;
  border-bottom: 1px solid #333;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
}

nav a {
  color: #ccc;
  text-decoration: none;
  margin-right: 1rem;
}

nav a:hover {
  color: #fff;
}

button,
input[type='submit'] {
  background: #444;
  color: #eee;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover,
input[type='submit']:hover {
  background: #555;
}

.card {
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
}

.card h2 {
  margin-top: 0;
}

.category-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.category-row button {
  background-color: #333;
  color: #ddd;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.category-row button:hover {
  background-color: #444;
}

.panel-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #444;
  padding: 0.5rem;
}

input[type='text'],
textarea {
  background-color: #333;
  color: #ddd;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

/* Additional classes from the old style.css can go here... */