const outputFile = Bun.file("2xko-stylesheet.css");

if (
	outputFile.size < 1
	|| outputFile.type !== "text/css"
) {
	throw new Error();
}

await Bun.write(
	"2xko-stylesheet.css",
	(await outputFile.text()).replaceAll("url(%%", " ")
	// break properties with values containing subreddit image links,
	// so they don't override the ones that get properly resolved
);