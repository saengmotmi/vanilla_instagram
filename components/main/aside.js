export default async function Aside() {
  return `
    <aside class="aside" style="left: 0;">
      <div class="aside_profile">
        <img class="aside_profile_image" alt="aside_profile_image" src="https://ca.slack-edge.com/T0F25KY9Y-U020D7262KH-3ac395a4150d-512" />
        <div class="aside_profile_info">
          <p class="bold">saengmotmi</p>
          <p class="text-gray bold">오종</p>
        </div>
        <span class="account_transition text-blue">전환</span>
      </div>
      <div>회원님을 위한 추천</div>
    </aside>
  `;
}
