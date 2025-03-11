"use client";

import { TeamObjectT, TreeObjectT } from "@/types";
import request from "@/utils/request";
import { ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

export const useGetTree = () =>{
  return useQuery({
    queryKey:['get/tree'],
    queryFn: async (): Promise<TreeObjectT> =>
      request({url:ROUTES.getTree}),
  });
}
export const useGetTeams = () =>{
  return useQuery({
    queryKey:['get/teams'],
    queryFn: async (): Promise<TeamObjectT[]> =>
      request({url:ROUTES.getTeams}),
  });
}
