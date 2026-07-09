function Profile() {
  return (
    <section className="profile">
      <div className="profile-card">
        <div className="profile-avatar" aria-hidden="true">홍</div>
        <h2>홍길동</h2>
        <ul className="profile-info">
          <li>
            <span className="profile-label">전화번호</span>
            <span>010-1234-5678</span>
          </li>
          <li>
            <span className="profile-label">이메일</span>
            <span>abcd@abcd.com</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
