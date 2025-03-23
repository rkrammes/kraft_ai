// Converted to TypeScript: theme.ts
// Basic interface for typed tokens
export interface Theme {
  background: string;
  text: string;
  cardBg: string;
  // add more typed tokens if desired
}

export const lightTheme: Theme = {
  background: '#f7f7f7',
  text: '#222',
  cardBg: '#eee',
  // Add more tokens if desired (button gradient, accent colors, etc.)
};

export const darkTheme: Theme = {
  background: '#1b1b1b',
  text: '#e0e0e0',
  cardBg: '#2c2c2c',
  // Add more tokens
};