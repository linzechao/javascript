function getRGB(color) {
	var red = '0x' + color.substr(1, 2),
		green = '0x' + color.substr(3, 2),
		blue = '0x' + color.substr(5);
	return 'rgb(' + parseInt(red) +
		', ' + parseInt(green) +
		', ' + parseInt(blue) + ')';
}
