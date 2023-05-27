import { NS } from "@ns";
import { fillArray } from "utils/utils";

export async function main(ns: NS): Promise<void> {
  const HOST_PREFIX = "pserv-";
  //I think this can be replaced by using ns.getPurchasedServers
  const servers = fillArray(24, HOST_PREFIX);
  const FILE_NAME = "early-hacking.js";

  servers.forEach((serverName) => {
    ns.scp(FILE_NAME, serverName);
    ns.exec(FILE_NAME, serverName, 3);
  });
}
