const ghpages = require('gh-pages');

ghpages.publish('dist', function (err) {
  if (err) {
    console.error('❌ Gagal deploy:', err);
  } else {
    console.log('✅ Deploy sukses ke GitHub Pages!');
  }
});
