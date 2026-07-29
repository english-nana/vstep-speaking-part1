const fs = require('fs');

try {
  let content = fs.readFileSync('data/group1.js', 'utf8');
  let match = content.match(/var\s+group1\s*=\s*(\{[\s\S]*?\});?\s*$/);
  if (!match) throw new Error("Could not parse group1.js");

  let group1Data;
  eval('group1Data = ' + match[1]);

  let sub1_5 = group1Data.subtopics.find(s => s.id === 'sub1_5');
  if (sub1_5 && sub1_5.structs) {
    sub1_5.structs.forEach(group => {
      if (group.groupTitle === "TRẢI NGHIỆM / CẢM GIÁC") {
        // Remove "I find it"
        group.items = group.items.filter(item => !item.en.includes("I find it"));
      }
      if (group.groupTitle === "ĐÁNH GIÁ / NHẬN ĐỊNH CHUNG") {
        // Remove "When people think of"
        group.items = group.items.filter(item => !item.en.includes("When people think of"));
      }
      // Change "I would love to" to "I'd love to" everywhere
      group.items.forEach(item => {
        if (item.en.includes("I would love to")) {
          item.en = item.en.replace("I would love to", "I'd love to");
        }
        if (item.example.includes("I would love to")) {
          item.example = item.example.replace("I would love to", "I'd love to");
        }
      });
    });
  }

  const newContent = 'var group1 = ' + JSON.stringify(group1Data, null, 2) + ';\n';
  fs.writeFileSync('data/group1.js', newContent, 'utf8');
  console.log("Updated group1.js successfully.");
} catch (e) {
  console.error("Error:", e);
}
