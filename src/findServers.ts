import { NS, Server } from "@ns";
import { findServers } from "./utils/utils";

export async function main(ns: NS): Promise<void> {
  const testServers = await findServers(ns, 3, condition);

  ns.tprint("INFO", ` - 32gb servers: ${testServers}`);
}

function condition(server: Server): boolean {
  return server.maxRam === 16;
}
