const extract = require('extract-zip')
const core = require('@actions/core')
const github = require('@actions/github')


const doTask = async () => {
    try {
        const inputPath = core.getInput("input-path")
        const outputPath = core.getInput("output-path")

        await extract(inputPath, { dir: outputPath })

    } catch (err) {
        console.error(err)
        core.setFailed(err.message)
    }
}

doTask()