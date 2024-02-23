const outputFile = Bun.file("2xko-stylesheet.css");

if (
	outputFile.size < 1
	|| outputFile.type !== "text/css"
) {
	throw new Error();
}

await Bun.write(
	"2xko-stylesheet.css",
	(await outputFile.text()).replace('@charset "UTF-8";', " ")
	// @charset is not supported by Reddit
);