import React from "react";
import { shallow } from "enzyme";
import * as client from "../api/client";
import { StoriesList } from "./StoriesList";

jest.mock("../api/client");

const story = { title: "story title", by: "author", id: 1 };
const commentIds = { data: [1] };
client.getTopStories = jest.fn().mockResolvedValue(commentIds);
client.getStory = jest.fn().mockResolvedValue({ data: story });

describe("StoriesList", () => {
  it("renders correctly if there are no stories", () => {
    const wrapper = shallow(<StoriesList />);
    expect(wrapper.find("h2").text()).toEqual("Stories are loading...");
  });

  it("renders correctly", () => {
    const wrapper = shallow(<StoriesList />);
    wrapper.setState({ stories: [story] });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
