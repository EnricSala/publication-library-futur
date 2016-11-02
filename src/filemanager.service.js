const dialog = require('electron').remote.dialog;
const os = require('os');
const path = require('path');
const moment = require('moment');
const jetpack = require('fs-jetpack');

class FileManager {

  constructor() {}

  exportResult(result) {
    const time = moment().format('YYYY-MM-DD_HH-mm');
    const filename = `${time}_result.txt`;

    const options = {
      title: 'Save result',
      defaultPath: path.join(os.homedir(), filename)
    };
    const savePath = dialog.showSaveDialog(options);

    const content = result.map(p => p.reference).join('\n\n') + '\n';
    console.log(`Writing references to: ${savePath}`);
    jetpack.write(savePath, content);
  }

}

module.exports = FileManager;
