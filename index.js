class Logger {
    levels = {
        TRACE: 37,
        DEBUG: 36,
        INFO: 34,
        WARN: 33,
        ERROR: 31,
        DEFAULT: 30,
    };

    constructor(level) {
        this.level = level || "OFF";
    }

    printer(type = "", text) {
        const color = this.levels[type] || this.levels["DEFAULT"];
        console.log(
            `\x1b[${color}m\x1b[1m`,
            `[ ${type + " ".repeat(5 - type.length)} ]`,
            "\x1b[0m",
            ...text
        );
    }

    getLogLevel(level) {
        if (level === "OFF") return false;
        const keys = Object.keys(this.levels).reverse().slice(1);
        const index = keys.indexOf(this.level);
        const levels = keys.slice(0, index + 1);
        return levels.includes(level);
    }

    trace(...text) {
        this.getLogLevel("TRACE") && this.printer("TRACE", text);
    }
    debug(...text) {
        this.getLogLevel("DEBUG") && this.printer("DEBUG", text);
    }
    info(...text) {
        this.getLogLevel("INFO") && this.printer("INFO", text);
    }
    warn(...text) {
        this.getLogLevel("WARN") && this.printer("WARN", text);
    }
    error(...text) {
        this.getLogLevel("ERROR") && this.printer("ERROR", text);
    }
}

module.exports = Logger;
