const fs = require('fs');

try {
  let content = fs.readFileSync('data/group1.js', 'utf8');
  let match = content.match(/var\s+group1\s*=\s*(\{[\s\S]*?\});?\s*$/);
  if (!match) throw new Error("Could not parse group1.js");

  let group1Data;
  eval('group1Data = ' + match[1]);

  let sub1_5 = group1Data.subtopics.find(s => s.id === 'sub1_5');
  if (sub1_5 && sub1_5.expressions) {
    sub1_5.expressions.forEach(group => {
      // Remove "When people think of"
      if (group.groupTitle === "ĐÁNH GIÁ / NHẬN ĐỊNH CHUNG") {
        group.items = group.items.filter(item => !item.en.includes("When people think of"));
      }
      
      // Split "I’m usually very busy..."
      if (group.groupTitle === "MÔ TẢ THÓI QUEN / TÌNH TRẠNG") {
        const itemIdx = group.items.findIndex(item => item.en.includes("I’m usually very busy with my work / my studies at school"));
        if (itemIdx !== -1) {
          const newItems = [
            {
              "en": "I’m usually very busy with my work",
              "vi": "Tôi thường rất bận rộn với công việc.",
              "example": "I don't have much free time because I’m usually very busy with my work."
            },
            {
              "en": "I’m usually very busy with my studies at school [my schoolwork]",
              "vi": "Tôi thường rất bận rộn với việc học ở trường.",
              "example": "I don't have much free time because I’m usually very busy with my studies at school."
            }
          ];
          group.items.splice(itemIdx, 1, ...newItems);
        }
      }
    });
  }

  const newContent = 'var group1 = ' + JSON.stringify(group1Data, null, 2) + ';\n';
  fs.writeFileSync('data/group1.js', newContent, 'utf8');
  console.log("Updated group1.js successfully.");
} catch (e) {
  console.error("Error:", e);
}
