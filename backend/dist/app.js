"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
module.exports = __toCommonJS(app_exports);
var import_config = require("dotenv/config");
var import_express3 = __toESM(require("express"));

// src/middlewares/index.ts
var import_cors = __toESM(require("cors"));
var import_express = require("express");
var import_morgan = __toESM(require("morgan"));

// src/config/middlewares/cors/index.ts
var corsOptions = {
  origin: ["*"]
};
var cors_default = corsOptions;

// src/constants/index.ts
var PORT = process.env.PORT;
var APP_NAME = process.env.APP_NAME;
var NODE_ENV = process.env.NODE_ENV;

// src/middlewares/index.ts
var middlewares_default = (app2) => {
  app2.use((0, import_cors.default)(cors_default));
  app2.use((0, import_express.json)());
  app2.use(
    (0, import_express.urlencoded)({
      extended: false
    })
  );
  if (NODE_ENV === "development") {
    app2.use((0, import_morgan.default)("dev"));
  }
};

// src/routes/status/index.ts
var import_express2 = require("express");

// src/contollers/status/index.ts
var status = async (_req, res) => {
  try {
    return res.status(200).send({
      ok: true
    });
  } catch (err) {
    return res.status(500).send({
      ok: false
    });
  }
};

// src/routes/status/index.ts
var router = (0, import_express2.Router)();
router.get("", status);
var status_default = router;

// src/routes/index.ts
var routes_default = (app2) => {
  app2.use("/status", status_default);
};

// src/app.ts
var app = (0, import_express3.default)();
middlewares_default(app);
routes_default(app);
var app_default = app;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
