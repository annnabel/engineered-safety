#!/usr/bin/env node
/**
 * Build script: Creates standalone HTML with loading status and error handling
 */

const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, 'project');
const outputFile = path.join(projectDir, 'Engineered-Safety-Platform-Standalone.html');

// Read component files
const componentFiles = [
  'esp/components.jsx',
  'esp/Dashboard.jsx',
  'esp/SubmitForm.jsx',
  'esp/SearchResults.jsx',
  'esp/Dashboards.jsx',
  'esp/App.jsx',
];

let bundledCode = '';
componentFiles.forEach(file => {
  const filePath = path.join(projectDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    bundledCode += '\n' + content + '\n';
  }
});

const standalone = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Engineered Safety Platform — Fremantle Bridges Alliance</title>

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; -webkit-font-smoothing: antialiased; }
    body { background: #f2f2f2; font-family: Arial, sans-serif; }

    #root { min-height: 100vh; }

    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 9999;
    }

    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #e6e6e6;
      border-top: 4px solid #00a7b5;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .error-screen {
      max-width: 600px;
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }

    .error-title {
      color: #e30613;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .error-message {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .error-code {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
      color: #333;
      text-align: left;
      word-break: break-word;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f2f2f2; }
    ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes slideUp {
      from { transform: translateY(12px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  </style>
</head>
<body>
  <div id="loading" class="loading-screen">
    <div class="loading-spinner"></div>
    <p style="color: #999; font-size: 14px;">Loading Engineered Safety Platform...</p>
  </div>
  <div id="root"></div>

  <script>
    // Show loading state
    window.addEventListener('DOMContentLoaded', function() {
      console.log('DOM loaded, waiting for React...');
    });

    // Check if libraries loaded
    window.addEventListener('load', function() {
      console.log('Page fully loaded');
      console.log('React:', typeof React !== 'undefined' ? '✓' : '✗');
      console.log('ReactDOM:', typeof ReactDOM !== 'undefined' ? '✓' : '✗');
      console.log('Babel:', typeof Babel !== 'undefined' ? '✓' : '✗');
      console.log('Chart:', typeof Chart !== 'undefined' ? '✓' : '✗');

      if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        document.getElementById('loading').innerHTML = \`
          <div class="error-screen">
            <div class="error-title">⚠️ Loading Error</div>
            <div class="error-message">
              Failed to load required libraries from CDN. Please check:<br/>
              1. Your internet connection<br/>
              2. Browser console (F12) for specific errors<br/>
              3. Try refreshing the page
            </div>
            <div class="error-code">
              React: \${typeof React !== 'undefined' ? '✓ loaded' : '✗ failed'}<br/>
              ReactDOM: \${typeof ReactDOM !== 'undefined' ? '✓ loaded' : '✗ failed'}<br/>
              Babel: \${typeof Babel !== 'undefined' ? '✓ loaded' : '✗ failed'}<br/>
              Chart.js: \${typeof Chart !== 'undefined' ? '✓ loaded' : '✗ failed'}
            </div>
          </div>
        \`;
        console.error('Failed to load required libraries');
        return;
      }

      // Hide loading screen when app renders
      setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading && document.getElementById('root').children.length > 0) {
          loading.style.display = 'none';
        }
      }, 500);
    });
  </script>

  <script type="text/babel">
    // Global error handler for React
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', event.error);
    });

    // Catch render errors
    const originalError = console.error;
    console.error = function(...args) {
      originalError.apply(console, args);
      if (args[0]?.includes?.('React') || args[0]?.includes?.('TypeError')) {
        const root = document.getElementById('root');
        root.innerHTML = \`
          <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f2f2f2; display: flex; align-items: center; justify-content: center; z-index: 9999;">
            <div class="error-screen">
              <div class="error-title">❌ Application Error</div>
              <div class="error-message">An error occurred loading the application. See browser console for details.</div>
              <div class="error-code">\${String(args[0])}</div>
            </div>
          </div>
        \`;
      }
    };

${bundledCode}
  </script>
</body>
</html>`;

fs.writeFileSync(outputFile, standalone, 'utf8');
console.log(`✓ Standalone HTML created: ${path.relative(process.cwd(), outputFile)}`);
console.log(`  Size: ${(standalone.length / 1024).toFixed(1)} KB`);
console.log(`  Features: Loading indicator, error handling, CDN diagnostics`);
