const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'project/Engineered-Safety-Platform-Standalone.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find the <script type="text/babel"> section and replace it with better debugging
const babelScriptStart = content.indexOf('<script type="text/babel">');
const babelScriptEnd = content.indexOf('</script>', babelScriptStart);

if (babelScriptStart > -1 && babelScriptEnd > -1) {
  const beforeScript = content.substring(0, babelScriptStart);
  const scriptContent = content.substring(babelScriptStart + 25, babelScriptEnd);
  const afterScript = content.substring(babelScriptEnd);

  const newScript = `<script type="text/babel">
    // Simple loading hide - remove loading screen when root has content
    window.appReady = function() {
      var loading = document.getElementById('loading');
      if (loading) {
        loading.style.display = 'none';
      }
    };

    // Hide loading on any error
    window.addEventListener('error', function(e) {
      var loading = document.getElementById('loading');
      if (loading) {
        loading.innerHTML = '<div style="padding:40px;text-align:center;"><h1 style="color:#e30613">Error Loading</h1><p>' + e.message + '</p></div>';
      }
      console.error('Error:', e);
    });

    // Delay script execution slightly to ensure React is loaded
    setTimeout(function() {
      try {
        ${scriptContent}
        window.appReady();
      } catch (e) {
        console.error('App Error:', e);
        var loading = document.getElementById('loading');
        if (loading) {
          loading.innerHTML = '<div style="padding:40px;text-align:center;"><h1 style="color:#e30613">Application Error</h1><p>' + e.message + '</p><small>' + e.stack + '</small></div>';
        }
      }
    }, 500);
  </script>`;

  const newContent = beforeScript + newScript + afterScript;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('✅ Fixed: Standalone HTML updated with better rendering');
} else {
  console.log('Could not find script section');
}
