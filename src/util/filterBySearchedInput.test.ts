import filterBySearchedInput from "./filterBySearchedInput";
import episodes from "../data/episodes.json";

test("filterBySearchedInput passes basic tests", () => {
    expect(
        filterBySearchedInput(episodes, "winter")[0].name.toLowerCase()
    ).toContain("winter");
    expect(
        filterBySearchedInput(episodes, "Eddard")[1].summary.toLowerCase()
    ).toContain("eddard");
    expect(
        filterBySearchedInput(episodes, "Night")[2].summary.toLowerCase()
    ).toContain("night");
});
