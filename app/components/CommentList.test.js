import React from "react";
import { shallow } from "enzyme";
import { CommentList } from "./CommentList";
import { Comment } from "./Comment";

describe("CommentList", () => {
  const handleClickMock = jest.fn();
  const showComments = false;
  const comments = [
    {
      by: "commenter",
      text: "comment about the article",
      id: 1
    },
    {
      by: "angry commenter",
      text: "angry comment about the article",
      id: 2
    },
    {
      by: "sarcastic commenter",
      text: "sarcastic comment about the article",
      id: 3
    }
  ];

  it("renders correctly when there are no comments", () => {
    const wrapper = shallow(
      <CommentList
        handleClick={handleClickMock}
        showComments={false}
        comments={[]}
      />
    );
    expect(wrapper.find("h6").text()).toEqual("No comments yet.");
  });

  it("renders correctly when there are no comments", () => {
    const wrapper = shallow(
      <CommentList
        handleClick={handleClickMock}
        showComments={false}
        comments={comments}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("calls handleClick when button is pressed", () => {
    const wrapper = shallow(
      <CommentList
        handleClick={handleClickMock}
        showComments={false}
        comments={comments}
      />
    );
    wrapper.find("button").simulate("click");
    expect(handleClickMock).toHaveBeenCalled();
  });

  it("renders correctly when there are no comments", () => {
    const wrapper = shallow(
      <CommentList
        handleClick={handleClickMock}
        showComments={true}
        comments={comments}
      />
    );
    expect(wrapper.find(Comment)).toHaveLength(3);
  });
});
