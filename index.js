class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\s-']+/g, "");
  }
  static titleize(string) {
    const words = string.split(' ');
    const newWords = words.map(function(el) {
      if (el === 'the' || el === 'a' || el === 'an' || el === 'but' || el === 'of' || el === 'and' || el === 'for' || el === 'at' || el === 'by' || el === 'from') {
        if (el === words[0]) {
          return Formatter.capitalize(el);
        } else {
          return el;
        }
      } else {
        return Formatter.capitalize(el);
      }
    })
    return newWords.join(' ');
  }
}
