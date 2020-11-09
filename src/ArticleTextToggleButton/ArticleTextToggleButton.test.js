import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleListItem tests", () => {
    it("renders correctly", () => {
        const data = "Show more";
        const {container} = render(<ArticleTextToggleButton buttonText = {data}/>);
        expect(container ).toMatchSnapshot();
    });
}); 