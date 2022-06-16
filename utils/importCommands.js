/* const { duck } = require("../commands/duck");
const { help } = require("../commands/help");
const { test } = require("../commands/test");
const { pp } = require("../commands/pp");
const { meteo } = require("../commands/meteo");
const { gif } = require("../commands/gif");
const { fakeToken, fakeTokenLog } = require("../commands/token");
const { clearchannel } = require("../commands/clearchannel"); */

import  {ban}  from "../commands/ban.js";
import { unban } from "../commands/unban.js";
import { kick } from "../commands/kick.js";
import { pp } from "../commands/pp.js";
import { timeout } from "../commands/timeout.js";
import { clear } from "../commands/clear.js";
import { help } from "../commands/help.js";

export default { ban, unban ,kick, pp, timeout, clear, help };
