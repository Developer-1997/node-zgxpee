const { exec } = require('child_process');
exec('python run.py', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
