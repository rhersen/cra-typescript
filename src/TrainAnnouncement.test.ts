import TrainAnnouncement, {
  Description,
  deviationText,
  shortText
} from "./TrainAnnouncement";

describe("deviationText", () => {
  it("handles undefined", () =>
    expect(deviationText({} as TrainAnnouncement)).toEqual([]));

  it("handles empty array", () => {
    const announcement = {
      Deviation: [] as Description[]
    } as TrainAnnouncement;
    expect(deviationText(announcement)).toEqual([]);
  });

  it("handles single-element array", () => {
    const announcement = {
      Deviation: [{ Description: "Plattformsbyte" }]
    } as TrainAnnouncement;
    expect(deviationText(announcement)).toEqual(["Plattformsbyte"]);
  });

  it("ignores short-train deviation", () =>
    expect(
      deviationText({
        Deviation: [{ Description: "Kort tåg" }]
      } as TrainAnnouncement)
    ).toEqual([]));
});

describe("shortText", () => {
  it("handles undefined", () =>
    expect(shortText({} as TrainAnnouncement)).toBe(""));

  it("handles empty array", () =>
    expect(
      shortText({ Deviation: [] as Description[] } as TrainAnnouncement)
    ).toBe(""));

  it("shows K for short-train deviation", () =>
    expect(
      shortText({
        Deviation: [{ Description: "Kort tåg" }]
      } as TrainAnnouncement)
    ).toEqual("K"));

  it("shows * for other deviations", () =>
    expect(
      shortText({
        Deviation: [{ Description: "Plattformsbyte" }]
      } as TrainAnnouncement)
    ).toEqual("*"));
});
