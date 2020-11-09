import React from "react";
import ArticleList from "./ArticleList";
import data from "./test"

describe("ArticleList tests", () => {
    it("renders correctly", () => {
        const { container  } = render(<ArticleList articles = {data}/>);
        expect(container ).toMatchSnapshot();
    });
}) 