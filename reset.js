const crypto = require('crypto');
const readline = require('readline');
const fetch = require('node-fetch');
const chalk = require('chalk');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const R = chalk.red;
const G = chalk.green;
const B = chalk.blue;
const Y = chalk.yellow;
console.log(":/");
console.log(R("red"));
console.log(G("green"));
console.log(B("blue"));
console.log(Y("yellow"));

function generateRandomString(length) {
  return crypto.randomBytes(length).toString('base64').slice(0, length);
}

function src() {
  rl.question("[ + ]  email / username: ", function(target) {
    if (target[0] === "@") { console.log("[ - ] enter username without '@'");
      rl.close();
      return;
    }
    let data;
    if (target.includes("@")) {
      data = {
        "_csrftoken": generateRandomString(32),
        "user_email": target,
        "guid": crypto.randomUUID(),
        "device_id": crypto.randomUUID()
      };
    } else {
      data = {
        "_csrftoken": generateRandomString(32),
        "username": target,
        "guid": crypto.randomUUID(),
        "device_id": crypto.randomUUID()
      };
    }

    sendpassreset(data);
  });
}

function sendpassreset(data) {
  const headers = {
    "User-Agent": `Instagram 150.0.0.0.000 Android (29/10; 300dpi; 720x1440; ${generateRandomString(16)}/${generateRandomString(16)}; ${generateRandomString(16)}; ${generateRandomString(16)}; ${generateRandomString(16)}; ${generateRandomString(16)}; en_GB;)`
  };

  fetch("https://i.instagram.com/api/v1/accounts/send_password_reset/", {
    method: 'POST',
    headers: headers,
    body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(body => {
    if (body.includes("obfuscated_email")) { console.log(body);
    } else { console.log(body);
    }
    rl.close();
  })
  .catch(e4 => { console.log(e4);
    rl.close();
  });
}

src();
