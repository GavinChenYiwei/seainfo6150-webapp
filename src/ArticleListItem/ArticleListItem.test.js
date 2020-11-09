import React from "react";
import data from "../ArticleListItem/test";
import ArticleListItem from "./ArticleListItem";
import {fireEvent} from "@testing-library/react";

describe("ArticleListItem tests", () => {
    it("renders correctly", () => {
        const { container  } = render(<ArticleListItem article = {data}/>);
        expect(container ).toMatchSnapshot();
    });

    it("renders correctly after button is clicked", () => {
        const { container, getByText } = render(
           <ArticleListItem article = {data}/>
        );
        const buttonShowMore = getByText("Show more");
        fireEvent.click(buttonShowMore);
        expect(container).toMatchSnapshot();

        const buttonShowLess = getByText("Show less");
        fireEvent.click(buttonShowLess);
        expect(container).toMatchSnapshot();
    });
}); 
