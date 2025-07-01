import path from 'path';
import fs from 'fs';

function getSecret(name) {
  try {
    return fs.readFileSync(path.join('/run/secrets', name.toLowerCase()), 'utf8').trim();
  } catch {
    return process.env[name];
  }
}
export default  getSecret;