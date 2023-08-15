export const fetchTimezone = async () => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York",
    { cache: "no-store" }
  );
  return (await res.json()) as { datetime: string };
};

interface Options {
  version?: "v1";
}

export class CustomApi {
  url: string;

  constructor(options: Options) {
    this.url = "http://worldtimeapi.org/api/timezone";
  }

  /**
   * Get the current timestame in the new your timezone.
   * @returns A Promise
   */
  public async getTimezone(): Promise<{ datetime: string }> {
    const res = await fetch(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      { cache: "no-store" }
    );
    return (await res.json()) as { datetime: string };
  }
}
