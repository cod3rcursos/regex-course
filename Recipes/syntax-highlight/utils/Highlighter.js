class Highlighter {
    constructor(sourceCode) {
        this._original = sourceCode
        this._modified = sourceCode
    }
    /**
     * Matches and applies syntax highlighting to desired language token or tokens.
     * @param {RegExp} tokenPattern - Search pattern to match a desired language token or tokens.
     * @param {string} color - Color that will be applied to the matched token or tokens.
     * @returns {Object} Highlighter instance
     */
    setColor(tokenPattern, color) {
        this._modified = this._modified.replace(tokenPattern, `<span style="color: #${color}"><b>$1</b></span>`)
        return this
    }

    get original() {
        return this._original
    }

    get styledCode() {
        return this._modified
    }
}

module.exports = Highlighter;