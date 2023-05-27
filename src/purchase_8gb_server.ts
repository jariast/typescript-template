import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  const RAM_AMOUNT = 8;
  const HOME = "home";
  const FILE_NAME = "early-hacking.js";
  const HOST_PREFIX = "pserv-";

  for (
    let serverNumber = 0;
    serverNumber < ns.getPurchasedServerLimit();
    serverNumber++
  ) {
    if (ns.getServerMoneyAvailable(HOME)) {
      const hostname = ns.purchaseServer(
        `${HOST_PREFIX}${serverNumber}`,
        RAM_AMOUNT
      ); // This may fail, later we should control that failure.
      ns.scp(FILE_NAME, hostname);
      ns.exec(FILE_NAME, hostname, 3);
    }
    await ns.sleep(1000);
  }
}
