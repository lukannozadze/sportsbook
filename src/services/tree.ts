"use client";

import { TreeObjectT } from "@/types";
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
