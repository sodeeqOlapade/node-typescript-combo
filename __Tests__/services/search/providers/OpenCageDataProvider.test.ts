// import axios from "axios";
// import * as Provider from "../../../../src/services/search/providers/OpenCageDataProvider";

// jest.mock("axios");

// describe("OpenCageDataProvider", () => {
//   test("an empty query string", async () => {
//     (axios as any).mockImplementation(() => '{"features": []}');
//     const result = await Provider.getPlaces("Paris");
//     console.log(result)
//     expect(result.data).toEqual({ features: [] });
//   });
// });