import TrainAnnouncement, {
  deviationText,
  shortText
} from "./TrainAnnouncement";

describe("deviationText", () => {
  it("handles undefined", () => expect(deviationText(a({}))).toEqual([]));

  it("handles empty array", () =>
    expect(deviationText(a({ Deviation: [] }))).toEqual([]));

  it("handles single-element array", () =>
    expect(deviationText(a({ Deviation: ["Plattformsbyte"] }))).toEqual([
      "Plattformsbyte"
    ]));

  it("ignores short-train deviation", () =>
    expect(deviationText(a({ Deviation: ["Kort tåg"] }))).toEqual([]));
});

describe("shortText", () => {
  it("handles undefined", () => expect(shortText(a({}))).toBe(""));

  it("handles empty array", () =>
    expect(shortText(a({ Deviation: [] }))).toBe(""));

  it("shows K for short-train deviation", () =>
    expect(shortText(a({ Deviation: ["Kort tåg"] }))).toEqual("K"));

  it("shows * for other deviations", () =>
    expect(shortText(a({ Deviation: ["Plattformsbyte"] }))).toEqual("*"));
});

function a(obj: {}): TrainAnnouncement {
  // @ts-ignore
  return obj;
}
