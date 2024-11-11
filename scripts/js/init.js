// Fetch config from remote URL
async function init() {
    const url = `https://raw.githubusercontent.com/Vector-Index/terminal/refs/heads/main/configs/test.json`
    const config = await window.utils.api.get(url)
    // Replace/reload the current config
    try {
    	config.value = JSON.parse(config)
    	data = config.data
    	scripts = config.scripts
	} catch (error) {
		return `Error: ${error}`
	}
}