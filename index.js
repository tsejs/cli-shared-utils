[
    'logger',
    'spinner'
].forEach(lib => {
    module.exports = {
        [lib]: require(`./lib/${lib}`)
    }
})
