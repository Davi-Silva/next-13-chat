"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);

// src/routes/status/index.ts
var import_express = require("express");

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
var router = (0, import_express.Router)();
router.get("", status);
var status_default = router;

// src/routes/index.ts
var routes_default = (app) => {
  app.use("/status", status_default);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
