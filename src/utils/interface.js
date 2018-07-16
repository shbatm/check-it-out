const blessed = require('blessed');
const path = require('path');
const Configstore = require('configstore');

const help = require(path.resolve(__dirname, 'helpText'));
const pkg = require(path.resolve(__dirname, '../../package.json'));

const conf = new Configstore(pkg.name);
const themeColor = conf.get('themeColor');

function loading() {
  const loading = blessed.loading({
    align: 'center',
    width: 'shrink',
    top: '0',
    left: '0',
  });

  return loading;
}

function branchTable() {
  const branchTable = blessed.listtable({
    align: 'left',
    left: 0,
    keys: true,
    noCellBorders: true,
    scrollable: true,
    scrollbar: true,
    style: {
      cell: {
        selected: {
          bg: '#FFFFFF',
          fg: '#272727',
        },
      },
      header: {
        fg: themeColor,
      },
      label: {
        fg: '#FFFFFF',
      },
      scrollbar: {
        bg: themeColor,
      },
    },
    tags: true,
    top: 0,
    bottom: 1,
    vi: false,
    width: 'shrink',
  });

  return branchTable;
}

function helpDialogue() {
  const helpDialogue = blessed.table({
    align: 'left',
    border: { type: 'line' },
    data: help.helpText(),
    height: 'shrink',
    hidden: true,
    noCellBorders: true,
    padding: 1,
    right: 0,
    style: {
      border: { fg: themeColor },
    },
    bottom: 0,
    width: 'shrink',
  });

  return helpDialogue;
}

function screen() {
  const screen = blessed.screen({
    autoPadding: true,
    fullUnicode: true,
    smartCSR: true,
    title: 'Check It Out',
  });

  return screen;
}

function statusBar() {
  const statusBar = blessed.box({
    border: false,
    bottom: 0,
    height: 1,
    width: '100%',
  });

  return statusBar;
}

function statusBarText() {
  const statusBarText = blessed.text({
    content: '',
    left: 0,
    bottom: 0,
  });

  return statusBarText;
}

function statusHelpText() {
  const statusHelpText = blessed.text({
    content: 'Press "?" to show/hide help.',
    right: 0,
  });

  return statusHelpText;
}

module.exports = {
  branchTable,
  loading,
  statusBarText,
  helpDialogue,
  screen,
  statusBar,
  statusHelpText,
};