import React from "react";
import { shallow } from "enzyme";
import * as client from "../api/client";
import { Story } from "./Story";

jest.mock("../api/client");

const story = { title: "story title", by: "author", id: 1, kids: [11, 22, 33] };
const comment = { by: "commentor", text: "foo bar", id: 1 };

client.getComment = jest.fn().mockResolvedValue(comment);

describe("Story", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Story story={story} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("updates showComments when toggleComments is called", () => {
    const wrapper = shallow(<Story story={story} />);
    wrapper.setState({ showComments: false });
    wrapper.instance().toggleComments({ preventDefault() {} });
    expect(wrapper.state().showComments).toBe(true);
  });

  it("calls getComment", () => {
    const wrapper = shallow(<Story story={story} />);
    expect(client.getComment).toHaveBeenCalledWith(story.kids[0]);
  });
});
