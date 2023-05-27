import { NS, Server } from "@ns";

async function findServers(
  ns: NS,
  maxLevel: number,
  condition: (server: Server) => boolean,
  serverName = "home",
  level = 0,
  visited: Set<string> = new Set<string>()
): Promise<string[]> {
  const server = ns.getServer(serverName);
  const result: string[] = [];

  if (condition(server) && !visited.has(serverName)) {
    result.push(serverName);
    visited.add(serverName);
  }

  if (level < maxLevel) {
    const connectedServers = ns.scan(serverName);
    for (const connectedServer of connectedServers) {
      if (!visited.has(connectedServer)) {
        const connectedServerNames = await findServers(
          ns,
          maxLevel,
          condition,
          connectedServer,
          level + 1,
          visited
        );

        result.push(...connectedServerNames);
      }
    }
  }

  return result;
}

function fillArray(arrayLength: number, prefix: string): Array<string> {
  return Array.from({ length: arrayLength + 1 }, (_, i) => `${prefix}${i}`);
}

export { fillArray, findServers };
