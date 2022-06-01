function accum(s) {
	return s.split('')
        .map((elem, i) => elem.toUpperCase() + elem.toLowerCase().repeat(i))
        .join('-');
}