// src/index.ts
var fetchTimezone = async () => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York",
    { cache: "no-store" }
  );
  return await res.json();
};
var CustomApi = class {
  constructor(options) {
    this.url = "http://worldtimeapi.org/api/timezone";
  }
  async getTimezone() {
    const res = await fetch(
      "http://worldtimeapi.org/api/timezone/America/New_York",
      { cache: "no-store" }
    );
    return await res.json();
  }
};
export {
  CustomApi,
  fetchTimezone
};
//# sourceMappingURL=index.js.map