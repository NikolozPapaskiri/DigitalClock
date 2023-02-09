import * as module from './module.js';

module.userName(`Niko`);

const niko = new module.User(`niko`);

console.log(module.user, module.default, module.User);