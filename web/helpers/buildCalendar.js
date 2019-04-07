const dayjs = require("dayjs");

const buildCalendar = monthIndex => {
  const day = dayjs()
    .month(monthIndex)
    .startOf("month")
    .startOf("week");

  const width = 7;
  const height = 6;

  return Array.from({ length: width * height }).map((_, index) => {
    return {
      date: day.add(index + 1, "day").toString(),
      events: []
    };
  });
};

module.exports = buildCalendar;
