export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F7F5F0;
    --surface: #EFECE5;
    --ink: #1A1814;
    --muted: #8A8275;
    --accent: #2D5016;
    --accent-light: #4A7A28;
    --accent-pale: #E8F0E0;
    --border: #D8D4CC;
    --white: #FFFFFF;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--ink);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.5; transform:scale(1.5); }
  }
`;
