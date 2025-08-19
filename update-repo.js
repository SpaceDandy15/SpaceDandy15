const fs = require('fs');
const axios = require('axios');

const username = 'SpaceDandy15';
const pinnedRepos = [
  'Custom_API',
  'dj-turntable',
  'SpaceDandy15.github.io',
  'atlas-the-joy-of-painting-api',
  'atlas-back-end',
  'atlas-smiling-school-javascript'
];

async function generateRepoSection() {
  let section = '<!--START_SECTION:repos-->\n';
  for (const repo of pinnedRepos) {
    section += `[![${repo}](https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=radical)](https://github.com/${username}/${repo})\n`;
  }
  section += '<!--END_SECTION:repos-->';
  return section;
}

async function updateReadme() {
  const readmePath = './README.md';
  let readme = fs.readFileSync(readmePath, 'utf8');

  const newSection = await generateRepoSection();
  readme = readme.replace(/<!--START_SECTION:repos-->[\s\S]*<!--END_SECTION:repos-->/, newSection);

  fs.writeFileSync(readmePath, readme, 'utf8');
  console.log('README.md updated!');
}

updateReadme();
