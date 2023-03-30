import { useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../config/config";
import { getWithExpiry } from "../utils";

const BASE_URL = BaseUrl;

export function useCategoryList() {
  return useQuery(
    ["category-list"],
    async () =>
      await fetch(`${BASE_URL}/api_category.php`)
        .then((response) => response.json())
        .then((json) => json)
        .catch((err) => err)
  );
}

export function useOrgList() {
  return useQuery(
    ["org-list"],
    async () =>
      await fetch(`${BASE_URL}/api/organization-list`)
        .then((response) => response.json())
        .then((json) => json)
        .catch((err) => err)
  );
}

export const GetTotalQuestions = async (id: any) => {
  return await fetch(`${BASE_URL}/api_count.php?category=${id}`)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};

export const GetQuestions = async (body: any) => {
  return await fetch(
    `${BASE_URL}/api.php?amount=${body.amount}&category=${body.category}&difficulty=${body.difficulty}&type=${body.type}`
  )
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};
