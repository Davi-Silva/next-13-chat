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

// src/contollers/status/index.ts
var status_exports = {};
__export(status_exports, {
  status: () => status
});
module.exports = __toCommonJS(status_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  status
});
