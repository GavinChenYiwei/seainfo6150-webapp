import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
    it("renders correctly", () => {
        const url  = "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg";
        const title = "The Statue of Liberty's torch heads to new museum";
        const { container  } = render(<ArticleImage url = {url} title = {title}/>);
        expect(container ).toMatchSnapshot();
    });
})