const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'project/Engineered-Safety-Platform-Standalone.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find the bundled script section
const babelStart = content.indexOf('<script type="text/babel">');
const babelEnd = content.indexOf('</script>', babelStart);

if (babelStart > -1 && babelEnd > -1) {
  const before = content.substring(0, babelStart);
  const scriptContent = content.substring(babelStart + 25, babelEnd);
  const after = content.substring(babelEnd);

  // Remove duplicate "const { useState, ... } = React;" declarations
  // Keep only the first one
  let lines = scriptContent.split('\n');
  let foundFirst = false;
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a useState import line
    if (line.includes("const { useState") && line.includes("} = React;")) {
      if (!foundFirst) {
        newLines.push(line);
        foundFirst = true;
      }
      // Skip duplicate declarations
    } else {
      newLines.push(line);
    }
  }

  const newScript = '<script type="text/babel">\n' + newLines.join('\n') + '\n</script>';
  const newContent = before + newScript + after;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('✅ Fixed: Removed duplicate React hook declarations');
} else {
  console.log('Error: Could not find script section');
}
