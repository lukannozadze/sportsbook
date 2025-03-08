"use client";

import request from "@/utils/request";
import { ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

export const useGetTree = () =>{
  return useQuery({
    queryKey:['get/tree'],
    queryFn: async (): Promise<unknown> =>
      request({url:ROUTES.getTree}),
  });
}
