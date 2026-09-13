import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreloadStaleTime: 0,
    defaultViewTransition: {
      types: ({ fromLocation, toLocation }) => {
        const isHome = (loc?: { pathname: string }) => loc?.pathname === "/";
        if (isHome(fromLocation) && !isHome(toLocation)) return ["to-detail"];
        if (!isHome(fromLocation) && isHome(toLocation)) return ["to-home"];
        return ["cross-navigate"];
      },
    },
  });

  return router;
};
