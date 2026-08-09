const fs = require('fs');
const path = require('path');
const projectRoot = path.resolve(__dirname, '..', '..');
let content = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

const anchor = "{renderStructures(sharedVocabData.expressions, true)}";
if (content.includes(anchor)) {
  const replacement = `
  <div className="mb-6">
  <select 
  className="w-full sm:w-auto p-2 border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) => {
    if (e.target.value !== "") {
      const el = document.getElementById(\`expr-group-\${e.target.value}\`);
      if (el) {
        const headerOffset = 150;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      e.target.value = "";
    }
  }}
  >
  <option value="">Chọn chủ đề để di chuyển nhanh</option>
  {sharedVocabData.expressions.map((group, idx) => (
    <option key={idx} value={idx}>{group.groupTitle}</option>
  ))}
  </select>
  </div>
  {renderStructures(sharedVocabData.expressions, true)}
`;

  // We need to replace ONLY the first occurrence or the specific one inside the expressions tab block
  // Let's replace the one that follows: {activeSharedTab === 'expressions' ...
  // Wait, let's just use string replace for the entire section.
  
  const regex = /\{activeSharedTab === 'expressions'[\s\S]*?\{renderStructures\(sharedVocabData\.expressions, true\)\}\n\s*<\/section>\n\s*\)\}/;
  const newSection = `{activeSharedTab === 'expressions' && sharedVocabData.expressions && sharedVocabData.expressions.length > 0 && (
  <section className="mb-6 sm:mb-8 animate-fade-in">
${replacement}
  </section>
  )}`;
  
  const newContent = content.replace(regex, newSection);
  if (content !== newContent) {
    fs.writeFileSync(path.join(projectRoot, 'index.html'), newContent, 'utf8');
    console.log('Successfully updated index.html');
  } else {
    console.log('Regex did not match.');
  }
}
