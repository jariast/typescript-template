import { NS } from "@ns";
import { fillArray } from "utils/fillArray";

export async function main(ns: NS): Promise<void> {
  const HOST_PREFIX = "pserv-";
  const servers = fillArray(24, HOST_PREFIX);

  ns.print("INFO", servers);

  servers.forEach((element) => {
    ns.killall(element);
  });
}
