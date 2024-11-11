async function cleanHTML(htmlString) {
	if (htmlString instanceof Promise) {
		htmlString = await htmlString
	}
	return window.utils.cleanHTML(htmlString)
}
cleanHTML(args)