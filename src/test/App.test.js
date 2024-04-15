import { render, screen } from "@testing-library/react";
import App from "../App";
import axios from "axios";
jest.mock("axios");

describe("API", () => {
  it("loads a TV show", async () => {
    const MOCKED_TV_SHOW = {
      results: [
        {
          adult: false,
          backdrop_path: "/butPVWgcbtAjL9Z7jU7Xj1KA8KD.jpg",
          genre_ids: [10767, 35],
          id: 22980,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Watch What Happens Live with Andy Cohen",
          overview:
            "Bravo network executive Andy Cohen discusses pop culture topics with celebrities and reality show personalities.",
          popularity: 5899.625,
          poster_path: "/onSD9UXfJwrMXWhq7UY7hGF2S1h.jpg",
          first_air_date: "2009-07-16",
          name: "Watch What Happens Live with Andy Cohen",
          vote_average: 5.1,
          vote_count: 45,
        },
      ],
    };
    axios.get.mockResolvedValueOnce({ data: MOCKED_TV_SHOW });
    render(<App />);
    const TVShowName = await screen.findByTestId("tv-show-name");
    expect(TVShowName.textContent).toBe(
      "Watch What Happens Live with Andy Cohen"
    );
  });
});
