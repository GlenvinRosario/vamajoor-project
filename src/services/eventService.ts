import axios from "axios";
import { Event } from "../types/event";

const API_URL = `${import.meta.env.VITE_ADMIN_BE_URL}/api/events`;

export const getEvents = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response?.data?.events;
};

export const getEventById = async (id: string): Promise<Event> => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response?.data?.event;
};