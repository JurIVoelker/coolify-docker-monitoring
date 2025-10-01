import { getContainers } from "@/lib/dockerUtils";

(async () => {
  const containers = await getContainers();
  console.log(containers);
})();