const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('group') && f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The quotes inside the JSON string are escaped as \" 
    let newContent = content.replace(/<sup class=\\"text-pink-500 font-bold text-xs uppercase\\">/g, '<sup class=\\"text-pink-500 font-bold text-xs\\">');
    
    // Also try without escaping just in case
    newContent = newContent.replace(/<sup class="text-pink-500 font-bold text-xs uppercase">/g, '<sup class="text-pink-500 font-bold text-xs">');
    
    // In case the label itself is uppercase like (ANSWER), convert it to (Answer)
    // Wait, the previous script generated (Answer), (Reason), (Example) which is Title Case.
    // That's fine.

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No changes needed in ${file}`);
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}
