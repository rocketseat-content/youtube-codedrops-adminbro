// ============================================
// Admin Bro
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");

const adminBro = new AdminBro({
  databases: [],
  rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro);

// ============================================
// Server
const express = require("express");
const server = express();

server
  .use(adminBro.options.rootPath, router)
  .listen(5500, () => console.log("Server started"));
