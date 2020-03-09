import branchDivider from "./branchDivider";
import TrainAnnouncement from "./TrainAnnouncement";

describe("branchDivider", () => {
  it("handles undefined", () =>
    expect(branchDivider({ latest: undefined })).toEqual(""));

  it("handles empty", () =>
    expect(branchDivider({ latest: a({}) })).toEqual(""));

  it("ne", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "So" })
      })
    ).toEqual("ne"));

  it("nw", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Sub" })
      })
    ).toEqual("nw"));

  it("Huvudsta", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Huv" })
      })
    ).toEqual("nw"));

  it("Tomteboda", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Tmö" })
      })
    ).toEqual("c"));

  it("Ulriksdal", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Udl" })
      })
    ).toEqual("ne"));

  it("c", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Sci" })
      })
    ).toEqual("c"));

  it("se", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Vhe" })
      })
    ).toEqual("se"));

  it("sw", () =>
    expect(
      branchDivider({
        latest: a({ LocationSignature: "Tu" })
      })
    ).toEqual("sw"));
});

function a(obj: {}): TrainAnnouncement {
  // @ts-ignore
  return obj;
}
