import { useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../config/config";
import { getWithExpiry } from "../utils";

const BASE_URL = BaseUrl;

export function useDonationList() {
  return useQuery(
    ["donation-list"],
    async () =>
      await fetch(`${BASE_URL}/api/donation-list`)
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

export const GetEventsList = async (data: any) => {
  return await fetch(`${BASE_URL}/api/event-list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getWithExpiry("token")
        ? "Bearer " + getWithExpiry("token")
        : "",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};
