const buildCalendar = require("../../web/helpers/buildCalendar");

describe("buildCalendar", () => {
  it("returns correct number of items", () => {
    const calendar = buildCalendar(2);
    expect(calendar.length).toBe(6 * 7);
  });
  it("returns correct first and last element", () => {
    const calendar = buildCalendar(2);
    expect(calendar[0].date).toBe("Sun, 24 Feb 2019 23:00:00 GMT");
    expect(calendar[calendar.length - 1].date).toBe(
      "Sat, 06 Apr 2019 22:00:00 GMT"
    );
  });
});
