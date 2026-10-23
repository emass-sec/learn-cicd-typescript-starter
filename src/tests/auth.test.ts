
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns the API key when authorization is valid", () => {
    const headers = { authorization: "ApiKey abc123" };

    expect(getAPIKey(headers)).toBe("abc123");
  });

  test("returns null when authorization is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the authorization scheme is incorrect", () => {
    const headers = { authorization: "Bearer abc123" };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the API key is missing", () => {
    const headers = { authorization: "ApiKey" };

    expect(getAPIKey(headers)).toBeNull();
  });
});
