import { sideEffect, setEventListener } from "../../utils/sideEffect.js";

export default function Comments({ id }) {
  const data = [{ comment_id: 1, username: "saengmotmi", content: "ㅎㅇ" }];

  sideEffect(() => {
    const comments = document.querySelectorAll(".comments");
    const comment = [...comments].find(({ dataset }) => +dataset.idx === id);
    const input = comment.querySelector("input");
    const userComments = comment.querySelector(".feed_user_comments");
    const submitButton = comment.querySelector("button");

    setEventListener({
      element: submitButton,
      cacheKey: "buttonClickEvent" + id,
      eventType: "click",
      callback: submitComment,
    });

    setEventListener({
      element: input,
      cacheKey: "inputEvent" + id,
      eventType: "keypress",
      callback: (e) => {
        if (e.key === "Enter") submitComment();
      },
    });

    function clearInput() {
      input.value = "";
    }

    function submitComment() {
      const newComment = document.createElement("li");
      newComment.classList.add("feed_contents", "user_comment");
      newComment.innerHTML = `
        <p>
          <span class="feed_username bold">${"saengmotmi"}</span>
          <span>${input.value}</span>
        </p>
        <i class="fal fa-sm fa-heart"></i>
      `;
      userComments.appendChild(newComment);
      clearInput();
    }
  });

  return `
    <section class="comments" data-idx="${id}">
      <div class="feed_user_action">
        <div class="feed_user_interaction">
          <i class="fal fa-lg fa-heart"></i>
          <i class="fal fa-lg fa-comment"></i>
          <i class="fas fa-lg fa-lg fa-paper-plane"></i>
        </div>
        <i class="fal fa-lg fa-bookmark feed_bookmark"></i>
      </div>
      <div class="feed_comments bold">
        <p>좋아요 1,000개</p>
      </div>
      <div class="feed_contents">
        <span class="feed_username bold">${"saengmotmi"}</span>
        <span>안녕하세욤</span>
      </div>
      <ul class="feed_user_comments">
        ${data.map(UserComment).joinComma()}
      </ul>
      <p class="created_at">1시간 전</p>
      <div class="feed_comment_input">
        <i class="fal fa-lg fa-smile"></i>
        <input type="text" placeholder="댓글 달기..." />
        <button type="button" onclick="" class="bold inactive">게시</button>
      </div>
    </section>
  `;
}

function UserComment({ username, content }) {
  return `
    <li class="feed_contents user_comment">
      <p>
        <span class="feed_username bold">${username}</span>
        <span>${content}</span>
      </p>
      <i class="fal fa-sm fa-heart"></i>
    </li>
  `;
}
