import branchDivider from "./branchDivider";
import TrainAnnouncement from "./TrainAnnouncement";

describe("branchDivider", () => {
  it("handles undefined", () =>
    expect(branchDivider({ actual: undefined })).toEqual(""));

  it("handles empty", () =>
    expect(branchDivider({ actual: a({}) })).toEqual(""));

  it("ne", () =>
    expect(
      branchDivider({
        actual: a({ LocationSignature: "So" })
      })
    ).toEqual("ne"));

  it("nw", () =>
    expect(
      branchDivider({
        actual: a({ LocationSignature: "Sub" })
      })
    ).toEqual("nw"));

  it("c", () =>
    expect(
      branchDivider({
        actual: a({ LocationSignature: "Sci" })
      })
    ).toEqual("c"));

  it("se", () =>
    expect(
      branchDivider({
        actual: a({ LocationSignature: "Vhe" })
      })
    ).toEqual("se"));

  it("sw", () =>
    expect(
      branchDivider({
        actual: a({ LocationSignature: "Tu" })
      })
    ).toEqual("sw"));
});

function a(obj: {}): TrainAnnouncement {
  // @ts-ignore
  return obj;
}
