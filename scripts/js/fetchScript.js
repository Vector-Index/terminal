// fetchScript("bar.js", "script.js")
async function fetchScript(remote, local) {
    if (!local) {
        local = remote
    }
    try {
        const [remoteName, remoteExtension] = remote.split(".")
        if (!remoteExtension in ["js", "py"]) {
            throw new Error("Only support .js and .py")
        }
        const url = `https://raw.githubusercontent.com/Vector-Index/terminal/refs/heads/main/scripts/${remoteExtension}/${remoteName}.${remoteExtension}`
        const script = await window.utils.api.get(url)
        if (script.startsWith("404")) {
            throw new Error(`${remote} does not exist`)
        }
        const [localName, localExtension] = local.split(".")
        if (localExtension !== remoteExtension) {
            throw new Error("Local script and remote script must have the same extension")
        }
        // scripts[localExtension][localName] = script
        scripts[localExtension][localName].text = script
        scripts[localExtension][localName].mode = "javascript"
        return `Fetched scripts.${remoteExtension}.${remoteName} -> scripts.${localExtension}.${localName}`
    } catch (error) {
        console.log(error)
        return `Error: ${error}`
    }
}
fetchScript(kwargs[0], kwargs[1])