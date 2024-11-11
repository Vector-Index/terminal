// Fetch config from remote URL
async function init() {
    const url = `https://raw.githubusercontent.com/Vector-Index/terminal/refs/heads/main/configs/test.json`
    const configuration = await window.utils.api.get(url)
    console.log(configuration)
    // Replace/reload the current config
    try {
    	config.value = JSON.parse(configuration)
    	data = config.value.data
    	scripts = config.value.scripts
    	return `Fetched config from ${url}`
	} catch (error) {
		return `Error: ${error}`
	}
}
init()