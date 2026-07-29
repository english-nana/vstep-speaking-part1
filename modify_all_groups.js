const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('group') && f.endsWith('.js'));

function addSuperscripts(arr) {
  if (!arr || !Array.isArray(arr)) return;
  const labels = ["Answer", "Reason", "Example"];
  
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].en) continue;
    if (arr[i].en.includes('<sup')) continue;
    
    const label = i < 2 ? labels[i] : labels[2];
    arr[i].en = `<sup class="text-pink-500 font-bold text-xs uppercase">(${label})</sup> ` + arr[i].en;
  }
}

for (const file of files) {
  const filePath = path.join(dataDir, file);
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    const varNameMatch = fileContent.match(/var\s+(group\d+)\s*=/);
    if (!varNameMatch) continue;
    const varName = varNameMatch[1];

    let match = fileContent.match(new RegExp(`var\\s+${varName}\\s*=\\s*(\\{[\\s\\S]*?\\});?\\s*$`));
    if (!match) {
      console.log(`Could not parse ${file} format`);
      continue;
    }

    let objectStr = match[1];
    let groupData;
    eval(`groupData = ` + objectStr);

    if (groupData.subtopics) {
      groupData.subtopics.forEach(subtopic => {
        if (subtopic.questions) {
          subtopic.questions.forEach(q => {
            if (q.b1) addSuperscripts(q.b1);
            if (q.b2) addSuperscripts(q.b2);
            if (q.c1) addSuperscripts(q.c1);
          });
        }
      });
    }

    const newContent = `var ${varName} = ` + JSON.stringify(groupData, null, 2) + ';\n';
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${file}`);
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}
