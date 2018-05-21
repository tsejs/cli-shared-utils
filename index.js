[
    'logger',
    'spinner'
].forEach(lib => {
    Object.assign(module.exports, require(`./lib/${lib}`))
})
