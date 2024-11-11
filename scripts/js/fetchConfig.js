// Fetch remote config
async function fetchConfig() {
    const url = `https://raw.githubusercontent.com/Vector-Index/terminal/refs/heads/main/configs/starter.json`
    const responseText = await window.utils.api.get(url)
    console.log(responseText)
    // Replace/reload the current config
    try {
        config.value = JSON.parse(responseText).config
        data = config.value.data
        scripts = config.value.scripts
        return `Fetched config from ${url}`
    } catch (error) {
        return `Error: ${error}`
    }
}
fetchConfig()