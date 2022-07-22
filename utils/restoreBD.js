const Importer = require("mysql-import");
require("dotenv").config();

const restoreBd = async () => {
  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

  const importer = new Importer({
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      host: MYSQL_HOST,
    });

    await importer.import('./caseXP.sql');

    await importer.disconnect();
};

module.exports = restoreBd;

if (!module.parent) {
  restoreBd();
}