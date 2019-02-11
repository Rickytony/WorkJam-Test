import React from "react";
import { shallow } from "enzyme";
import { Comment } from "./Comment";

describe("Comment", () => {
  const comment = {
    by: "Comment Writer",
    text: "The text of a comment."
  };

  it("renders correctly", () => {
    const wrapper = shallow(<Comment comment={comment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
