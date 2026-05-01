#!/usr/bin/env node
/**
 * Build script: Create completely offline standalone HTML
 * Downloads all dependencies and embeds them directly
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const projectDir = path.join(__dirname, 'project');
const outputFile = path.join(projectDir, 'Engineered-Safety-Platform-Offline.html');

// URLs for required libraries (minified, production versions)
const libraries = {
  react: 'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  reactDom: 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  babel: 'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js',
  chartJs: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.min.js',
};

console.log('Downloading libraries from CDN...');

let downloadedLibs = {};

const downloadLibrary = (name, url) => {
  return new Promise((resolve, reject) => {
    console.log('  Downloading ' + name + '...');
    https.get(url, (response) => {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        downloadedLibs[name] = data;
        const kb = (data.length / 1024).toFixed(1);
        console.log('  ✓ ' + name + ' (' + kb + ' KB)');
        resolve();
      });
    }).on('error', reject);
  });
};

// Download all libraries
Promise.all([
  downloadLibrary('React', libraries.react),
  downloadLibrary('ReactDOM', libraries.reactDom),
  downloadLibrary('Babel', libraries.babel),
  downloadLibrary('Chart.js', libraries.chartJs),
]).then(() => {
  console.log('\n✓ All libraries downloaded\n');

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

  <!-- React (Production) -->
  <script>
${downloadedLibs.react}
  </script>

  <!-- ReactDOM (Production) -->
  <script>
${downloadedLibs.reactDom}
  </script>

  <!-- Babel Standalone -->
  <script>
${downloadedLibs.babel}
  </script>

  <!-- Chart.js -->
  <script>
${downloadedLibs.chartJs}
  </script>

  <!-- App Code -->
  <script type="text/babel">
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        var loading = document.getElementById('loading');
        if (loading && document.getElementById('root').children.length > 0) {
          loading.style.display = 'none';
        }
      }, 100);
    });

    try {
${bundledCode}
    } catch (error) {
      console.error('App Error:', error);
      document.getElementById('loading').innerHTML = '<div style="padding:40px;text-align:center;"><div style="color:#e30613;font-size:24px;font-weight:bold;margin-bottom:12px;">Application Error</div><div style="color:#666;margin-bottom:20px;">' + error.message + '</div></div>';
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(outputFile, standalone, 'utf8');
  const sizeKB = (standalone.length / 1024).toFixed(1);
  const sizeMB = (standalone.length / (1024 * 1024)).toFixed(2);

  console.log('✅ OFFLINE VERSION CREATED');
  console.log('   File: project/Engineered-Safety-Platform-Offline.html');
  console.log('   Size: ' + sizeMB + ' MB (' + sizeKB + ' KB)');
  console.log('');
  console.log('✓ Completely standalone - no internet required');
  console.log('✓ Works from Downloads, Desktop, USB drive, anywhere');
  console.log('✓ All libraries (React, Babel, Chart.js) embedded');

}).catch(error => {
  console.error('Error downloading libraries:', error.message);
  console.error('Please check your internet connection and try again.');
  process.exit(1);
});
