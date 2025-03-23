import styled from 'styled-components';
import { useTheme } from 'styled-components';

function GradientButton(props) {
  const theme = useTheme();

  // optional: if you want dynamic gradient in dark vs. light
  const gradient = theme.gradient
    ? theme.gradient
    : 'linear-gradient(45deg, rgba(52,152,219,0.8), rgba(255,153,0,0.8))';
  const gradientHover = theme.gradientHover
    ? theme.gradientHover
    : 'linear-gradient(45deg, rgba(52,152,219,1), rgba(255,153,0,1))';

  const StyledButton = styled.button`
    font-family: ${theme.fontFamily ?? 'Roboto Mono, monospace'};
    background: ${gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.3s ease;
    margin: 8px 0;

    &:hover {
      background: ${gradientHover};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default GradientButton;