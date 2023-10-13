import React from "react";

const commentsData = [
  {
    name: "harsh",
    text: "lorem ispusm lazy nights",
    replies: [],
  },
  {
    name: "harsh",
    text: "lorem ispusm lazy nights",
    replies: [
      {
        name: "harsh",
        text: "lorem ispusm lazy nights",
        replies: [],
      },
      {
        name: "harsh",
        text: "lorem ispusm lazy nights",
        replies: [
          {
            name: "harsh",
            text: "lorem ispusm lazy nights",
            replies: [
              {
                name: "harsh",
                text: "lorem ispusm lazy nights",
                replies: [],
              },
              {
                name: "harsh",
                text: "lorem ispusm lazy nights",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "harsh",
        text: "lorem ispusm lazy nights",
        replies: [],
      },
    ],
  },
  {
    name: "harsh",
    text: "lorem ispusm lazy nights",
    replies: [],
  },
  {
    name: "harsh",
    text: "lorem ispusm lazy nights",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex mt-4 items-center rounded-sm bg-gray-100 shadow-sm my-2">
      <img
        alt="user-icon"
        className="h-8 mx-3 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28I-5H6sO1MTry1y5diYr9SBqiHBHFhPYM7TnaJOOfugjweDP"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-7 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments : </h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
