export default async function Stories() {
  const storyUsers = await fetch("/data/stories.json").then((res) =>
    res.json()
  );

  return `
    <div class="stories">
      ${(await Promise.all(storyUsers.map(Story))).joinComma()}
    </div>
  `;
}

function Story({ username, profile_image_url }) {
  return `
    <div class="story">
      <div class="gradient_circle">
        <img class="story_profile" alt="story_profile" src="${profile_image_url}" />
      </div>
      <span>${username}</span>
    </div>
  `;
}
