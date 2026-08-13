import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const receivedArgs = process.argv.slice(2);
const nextArgs = [];

for (let index = 0; index < receivedArgs.length; index += 1) {
  const argument = receivedArgs[index];

  if (argument === "--strictPort") {
    continue;
  }

  if (argument === "--host") {
    nextArgs.push("--hostname");
    if (receivedArgs[index + 1]) {
      nextArgs.push(receivedArgs[index + 1]);
      index += 1;
    }
    continue;
  }

  nextArgs.push(argument);
}

const nextBinary = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);

const server = spawn(process.execPath, [nextBinary, "dev", ...nextArgs], {
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.kill(signal));
}

server.on("exit", (code) => {
  process.exit(code ?? 0);
});
