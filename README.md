# simple-logger

This is a simple logger to get the next results

```
[ TRACE ] message
[ DEBUG ] message
[ INFO  ] message
[ WARN  ] message
[ ERROR ] message
```

## Reference

the library responds to the next showing level table
| Level of request| TRACE | DEBUG | INFO | WARN | ERROR | OFF |
| :-------------- | :---- | :---- | :--- | :--- | :---- | :-- |
| TRACE | YES | NO | NO | NO | NO | NO |
| DEBUG | YES | YES | NO | NO | NO | NO |
| INFO | YES | YES | YES | NO | NO | NO |
| WARN | YES | YES | YES | YES | NO | NO |
| ERROR | YES | YES | YES | YES | YES | NO |

The logger functions uses rest parameters so you can set any number of parameters

## Usage

```js
/// Common JS
const Logger = require("@hectorlobatosilva/simple-logger");
/// Module JS
import Logger from "@hectorlobatosilva/simple-logger";
const logger = new Logger("INFO"); // Logs levels [ "TRACE","DEBUG","INFO","WARN","ERROR" ] OFF by default
logger.trace("Some", "undefined", "number", "of", "parameters");
logger.debug("Some", "undefined", "number", "of", "parameters");
logger.info("Some", "undefined", "number", "of", "parameters");
logger.warn("Some", "undefined", "number", "of", "parameters");
logger.error("Some", "undefined", "number", "of", "parameters");

// Output with INFO level
// [ INFO  ]  Some undefined number of parameters
// [ WARN  ]  Some undefined number of parameters
// [ ERROR ]  Some undefined number of parameters

/// Output with TRACE level
// [ TRACE ]  Some undefined number of parameters
// [ DEBUG ]  Some undefined number of parameters
// [ INFO  ]  Some undefined number of parameters
// [ WARN  ]  Some undefined number of parameters
// [ ERROR ]  Some undefined number of parameters
```

## License

MIT
