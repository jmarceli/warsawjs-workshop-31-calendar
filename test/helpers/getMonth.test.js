const getMonth = require("../../web/helpers/getMonth");

describe("getMonth", () => {
  it("returns correct month number", () => {
    expect(getMonth({ query: { month: "2019-04" } })).toBe(3);
    expect(getMonth({ query: { month: "2018-12" } })).toBe(11);
    expect(getMonth({ query: { month: "2018-01" } })).toBe(0);
  });
});
