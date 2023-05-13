import React, { useState } from "react";

interface comment {
  id: number;
  text: string;
}

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <>
      <div>CommentsPage</div>
      <button onClick={fetchComments}>load</button>
      {comments.map((c: comment) => {
        return (
          <div key={c.id}>
            {c.id}
            {c.text}
          </div>
        );
      })}
    </>
  );
};

export default CommentsPage;
