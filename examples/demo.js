// Small example showing how the helpers fit together.

const config = {
  retries: 3,
  timeout: 5000,
};

function run(task) {
  for (let i = 0; i < config.retries; i++) {
    try {
      return task();
    } catch (err) {
      if (i === config.retries - 1) throw err;
    }
  }
}

console.log('ready', config);
module.exports = { run, config };
