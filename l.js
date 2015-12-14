/**
 * because fuck `console.log`.
 * `l` is a shorthand for `console.log`.
 */
function l() {
    if (arguments.length) console.log.apply(console, arguments)
}