const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const targetPath = "./src/environments/environment.production.ts";

const envConfigFile = `export const environment = {
   production: true,
  recaptcha: '${process.env.NG_APP_RECAPTCHA}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});
