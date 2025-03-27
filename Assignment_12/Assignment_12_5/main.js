function createSelectBox(startYear, endYear) {
  document.writeln(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.writeln(`<option value=${i}>${i}</option>`);
  }
  document.writeln(`</select>`);
}
createSelectBox(2000, 2021);
