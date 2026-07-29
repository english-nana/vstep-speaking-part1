const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('group') && f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The previous script added: <sup class=\"text-pink-500 font-bold text-xs uppercase\">(Label)</sup> 
    // And then we changed it to: <sup class=\"text-pink-500 font-bold text-xs\">(Label)</sup> 
    // We can just strip out any <sup class=...>(Answer|Reason|Example)</sup> 
    
    let newContent = content.replace(/<sup class=\\"text-pink-500 font-bold text-xs( uppercase)?\\">\((Answer|Reason|Example)\)<\/sup> /g, '');
    newContent = newContent.replace(/<sup class="text-pink-500 font-bold text-xs( uppercase)?">\((Answer|Reason|Example)\)<\/sup> /g, '');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Reverted ${file}`);
    } else {
      console.log(`No annotations found in ${file}`);
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}
