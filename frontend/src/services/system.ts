import { apiFetch } from "@/api/client";

export type ApiHealth = { status: string };

export const getApiHealth = () => apiFetch<ApiHealth>("/health");
