export const RSVP_URL = "https://withjoy.com/crystal-andrew";
export const REGISTRY_URL = "https://withjoy.com/crystal-andrew/registry";

// Midnight Eastern Time, June 4, 2026
const RSVP_DEADLINE = new Date("2026-06-04T00:00:00-04:00");

export function isRsvpOpen() {
  return new Date() < RSVP_DEADLINE;
}
