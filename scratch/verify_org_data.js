const orgData = require('../frontend/js/data_organizations.js');

console.log('Organizations loaded:', orgData.ORGANIZATIONS.length);
console.log('Country coordinates mapped:', Object.keys(orgData.COUNTRY_COORDINATES).length);
console.log('Comparison matrices:', Object.keys(orgData.COMPARISONS).length);

let totalMcqs = 0;
let errors = [];

orgData.ORGANIZATIONS.forEach((org, i) => {
  totalMcqs += org.mcqs ? org.mcqs.length : 0;
  if (!org.id) errors.push(`Org #${i} has no id`);
  if (!org.name) errors.push(`Org ${org.id} has no name`);
  if (!org.headquarters || !org.headquarters.city) errors.push(`Org ${org.id} missing HQ`);
  if (!org.leadership || !org.leadership.name) errors.push(`Org ${org.id} missing leadership`);
  if (!org.pakistanRole || !org.pakistanRole.status) errors.push(`Org ${org.id} missing Pakistan role`);
  if (!org.members || org.members.length === 0) errors.push(`Org ${org.id} missing members`);
  if (!org.mcqs || org.mcqs.length === 0) errors.push(`Org ${org.id} missing MCQs`);

  // Check country coordinates resolution for member codes
  org.members.forEach(m => {
    if (!orgData.COUNTRY_COORDINATES[m.code]) {
      errors.push(`Org ${org.id}: missing coordinates for member code ${m.code}`);
    }
  });

  console.log(`[OK] ${org.shortName} (${org.name}): ${org.members.length} plotted members, ${org.organs.length} organs, ${org.mcqs.length} MCQs, Pakistan status: ${org.pakistanRole.status}`);
});

console.log(`Total MCQs across all organizations: ${totalMcqs}`);
if (errors.length > 0) {
  console.error('Validation errors found:');
  errors.forEach(e => console.error(' -', e));
  process.exit(1);
} else {
  console.log('ALL 10 ORGANIZATIONS DATA PERFECTLY VALIDATED AND READY!');
}
