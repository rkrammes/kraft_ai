@@ Create /Users/ryankrammes/kraft_ai/src/components/GradientButton.js for styled-components
+import styled from 'styled-components';

+const GradientButton = styled.button`
+  font-family: 'Roboto Mono', monospace;
+  background: linear-gradient(45deg, rgba(52,152,219,0.8), rgba(255,153,0,0.8));
+  -webkit-background-clip: text;
+  -webkit-text-fill-color: transparent;
+  border: none;
+  border-radius: 4px;
+  padding: 12px 24px;
+  cursor: pointer;
+  font-size: 1em;
+  transition: background 0.3s ease;
+  margin: 8px 0;
+
+  &:hover {
+    background: linear-gradient(45deg, rgba(52,152,219,1), rgba(255,153,0,1));
+    -webkit-background-clip: text;
+    -webkit-text-fill-color: transparent;
+  }
+`;

+export default GradientButton;