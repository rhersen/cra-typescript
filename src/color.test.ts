import color from "./color";
import TrainAnnouncement from "./TrainAnnouncement";

describe("color", () => {
  it("no delay", () =>
    expect(color(a("07:03:00"))).toEqual("rgb(0,256,0)"));

  it("30 seconds delay", () =>
    expect(color(a("07:03:30"))).toEqual("rgb(256,256,256)"));

  it("1 minute delay", () =>
    expect(color(a("07:04:00"))).toEqual("rgb(256,256,256)"));

  it("90 seconds delay", () =>
    expect(color(a("07:04:30"))).toEqual("rgb(256,256,256)"));

  it("2 minutes delay", () =>
    expect(color(a("07:05:00"))).toEqual("rgb(256,256,0)"));

  it("3 minutes delay", () =>
    expect(color(a("07:06:00"))).toEqual("rgb(256,192,0)"));

  it("4 minutes delay", () =>
    expect(color(a("07:07:00"))).toEqual("rgb(256,128,0)"));

  it("6 minutes delay", () =>
    expect(color(a("07:09:00"))).toEqual("rgb(256,112,0)"));

  it("8 minutes delay", () =>
    expect(color(a("07:11:00"))).toEqual("rgb(256,96,0)"));

  it("20 minutes delay", () =>
    expect(color(a("07:23:00"))).toEqual("rgb(256,0,0)"));
});

function a(t: string): TrainAnnouncement {
  // @ts-ignore
  return {
    AdvertisedTimeAtLocation: "2020-01-23T07:03:00.000+01:00",
    TimeAtLocation: `2020-01-23T${t}.000+01:00`,
    TimeAtLocationWithSeconds: `2020-01-23T${t}.000+01:00`
  };
}
