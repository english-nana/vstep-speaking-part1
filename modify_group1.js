const fs = require('fs');

try {
  let fileContent = fs.readFileSync('data/group1.js', 'utf8');
  let match = fileContent.match(/var\s+group1\s*=\s*(\{[\s\S]*?\});?\s*$/);
  
  if (!match) {
    console.log("Could not parse group1.js format");
    process.exit(1);
  }

  let objectStr = match[1];
  let group1Data;
  eval('group1Data = ' + objectStr);

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

  if (group1Data.subtopics) {
    group1Data.subtopics.forEach(subtopic => {
      if (subtopic.questions) {
        subtopic.questions.forEach(q => {
          if (q.b1) addSuperscripts(q.b1);
          if (q.b2) addSuperscripts(q.b2);
          if (q.c1) addSuperscripts(q.c1);
        });
      }
    });
  }

  const newContent = 'var group1 = ' + JSON.stringify(group1Data, null, 2) + ';\n';
  fs.writeFileSync('data/group1.js', newContent, 'utf8');
  console.log('Done modifying group1.js');
} catch (e) {
  console.error("Error:", e);
}
