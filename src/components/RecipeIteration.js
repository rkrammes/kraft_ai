/* === Root Variables from Old style.css, Extended for Modern Use === */
:root {
  --primary: #1A1A1A;
  --secondary: #2C2C2C;
  --accent-blue: #3498DB;
  --accent-orange: #FF9900;
  --text: #FFFFFF;
  --muted-text: #BDBDBD;

  --font-family: 'Roboto Mono', Consolas, 'Courier New', monospace;
  --base-font-size: 16px;
  --line-height: 1.5;

  --max-width: 1200px;
  --gutter: 24px;

  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;

  --icon-size: 24px;
}

/* === Global Reset & Base Styles === */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: var(--base-font-size);
  scroll-behavior: smooth; /* modern best practice for smooth scrolling */
}

body {
  font-family: var(--font-family);
  line-height: var(--line-height);
  background-color: var(--primary);
  color: var(--text);
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.3s ease, color 0.3s ease; /* modern transitions */
}

.dark-mode {
  background-color: #111;
  color: #eee;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Container */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--gutter);
}

/* Typography & Headings */
h1, h2, h3, h4 {
  font-family: var(--font-family);
  font-weight: bold;
}
h1 { font-size: 32px; margin-bottom: var(--spacing-medium); }
h2 { font-size: 28px; margin-bottom: var(--spacing-medium); }
h3 { font-size: 24px; margin-bottom: var(--spacing-small); }
h4 { font-size: 20px; margin-bottom: var(--spacing-small); }

/* Glass Panels (if used for the old "glass" effect) */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: var(--spacing-medium);
  margin-bottom: var(--spacing-large);
}

/* Panel Container & Category Row (for your front page layout) */
.panel-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-medium);
  margin-bottom: var(--spacing-medium);
}

.category-row {
  display: flex;
  gap: var(--spacing-small);
  margin-bottom: var(--spacing-medium);
  flex-wrap: wrap;
}
.category-row button {
  background-color: #333;
  color: #ddd;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  margin-bottom: 0.5rem;
}
.category-row button:hover {
  background-color: #444;
}

/* Cards */
.card {
  background-color: var(--secondary);
  border: 1px solid #444;
  border-radius: 5px;
  margin: var(--spacing-small) 0;
  padding: var(--spacing-medium);
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

/* Table & Input Fields */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #444;
  padding: var(--spacing-small);
}

input[type='text'],
textarea {
  background-color: var(--secondary);
  color: var(--accent-orange);
  border: 1px solid var(--accent-blue);
  border-radius: 4px;
  padding: 8px 12px;
  font-family: var(--font-family);
  outline: none;
  transition: border-color 0.2s ease;
}
input[type='text']:focus,
textarea:focus {
  border-color: var(--accent-orange);
}
::placeholder {
  color: var(--accent-orange);
  opacity: 1;
}

/* Buttons with Gradient Text Effects */
.btn, .recipe-item, .ingredient-item {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--secondary);
  color: var(--secondary);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  font-family: var(--font-family);
  background: linear-gradient(45deg, rgba(52,152,219,0.8), rgba(255,153,0,0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 0.3s ease;
  margin: var(--spacing-small) 0;
}
.btn:hover, .recipe-item:hover, .ingredient-item:hover {
  background: linear-gradient(45deg, rgba(52,152,219,1), rgba(255,153,0,1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Additional structure from old style: .page-wrapper, .top-level, .second-level, etc.
   If you want them, uncomment or adapt below. */

/* Example:
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.top-level {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-medium);
  background-color: var(--secondary);
}
*/