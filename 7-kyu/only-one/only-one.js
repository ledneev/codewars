function onlyOne(...args) {
  return args.filter(arg => arg === true).length === 1;
}