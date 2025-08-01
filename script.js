const stats = [
  { icon: "📜", value: "10K+", label: "Certificates Issued" },
  { icon: "🌐", value: "50+", label: "Countries Reached" },
  { icon: "👩‍🎓", value: "15K+", label: "Learners Enrolled" },
  { icon: "✅", value: "99.9%", label: "Verification Success" }
];

const statsGrid = document.getElementById('statsGrid');

stats.forEach(stat => {
  const div = document.createElement('div');
  div.className = 'stat-card';
  div.innerHTML = `
    <div class="value"><span class="icon">${stat.icon}</span>${stat.value}</div>
    <p class="label">${stat.label}</p>
  `;
  statsGrid.appendChild(div);
});
