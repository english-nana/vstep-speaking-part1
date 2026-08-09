const fs = require('fs');
const path = require('path');
const projectRoot = path.resolve(__dirname, '..', '..');

try {
  let content = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

  // Replace expressions tab content
  const target = `{activeSharedTab === 'expressions' && sharedVocabData.expressions && sharedVocabData.expressions.length > 0 && (
  <section className="mb-6 sm:mb-8 animate-fade-in">
  {renderStructures(sharedVocabData.expressions, true)}
  </section>
  )}`;

  const replacement = `{activeSharedTab === 'expressions' && sharedVocabData.expressions && sharedVocabData.expressions.length > 0 && (
  <section className="mb-6 sm:mb-8 animate-fade-in">
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
  </section>
  )}`;

  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(path.join(projectRoot, 'index.html'), content, 'utf8');
    console.log("Updated index.html successfully.");
  } else {
    console.log("Could not find the target string in index.html");
  }
} catch (e) {
  console.error("Error:", e);
}
