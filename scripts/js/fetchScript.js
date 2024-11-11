// fetchScript("bar.js", "script.js")
async function fetchScript(remote, local) {
    if (!local) {
        local = remote
    }
    try {
        let [remoteName, remoteExtension] = remote.split(".")
        if (!remoteExtension in ["js", "py"]) {
            throw new Error("Only support .js and .py")
        }
        const url = `https://raw.githubusercontent.com/yuxiaoli/terminal/refs/heads/main/scripts/${remoteExtension}/${remoteName}.${remoteExtension}`
        const script = await window.utils.api.get(url)
        const [localName, loalExtension] = local.split(".")
        if (localExtension !== remoteExtension) {
            throw new Error("Local script and remote script must have the same extension")
        }
        scripts[localExtension][localName] = script
        return `Fetched scripts.${remoteExtension}.${remoteName} -> scripts.${localExtension}.${localName}`
    } catch (error) {
        console.log(error)
        return `Error: ${error}`
    }
}
fetchScript(kwargs.remote, kwargs.local)