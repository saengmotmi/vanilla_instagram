import Comments from "./comments.js";

export default function Feed({ id }) {
  return `
    <article class="feed">
      <header>
        <div class="feed_header">
          <img class="mini_profile" alt="mini_profile" src="https://ca.slack-edge.com/T0F25KY9Y-U020D7262KH-3ac395a4150d-512" />
          <div>
            <p class="username">saengmotmi</p>
            <p class="place">낙성대</p>
          </div>
        </div>
        <i class="far fa-ellipsis-h"></i>
      </header>
      <img alt="feed_img" src="https://saengmotmi.netlify.app/static/263099543667adabc3bab0baf80a63cc/fbd2c/reculsive-humor.jpg" />
      ${Comments({ id })}
    </article>
  `;
}
