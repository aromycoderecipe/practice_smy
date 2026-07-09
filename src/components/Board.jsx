const posts = [
  { id: 5, title: '공지사항 안내드립니다', author: '관리자', date: '2026-07-08', views: 128 },
  { id: 4, title: '게시판 이용 규칙 안내', author: '홍길동', date: '2026-07-07', views: 76 },
  { id: 3, title: '자유롭게 의견을 남겨주세요', author: '김철수', date: '2026-07-06', views: 54 },
  { id: 2, title: '오늘의 회고', author: '이영희', date: '2026-07-05', views: 41 },
  { id: 1, title: '첫 게시글입니다', author: '박민수', date: '2026-07-04', views: 12 },
]

function Board() {
  return (
    <section className="board">
      <div className="board-card">
        <div className="board-header">
          <span className="eyebrow eyebrow-dark">Board</span>
          <h2>게시판</h2>
          <button type="button" className="btn-primary">글쓰기</button>
        </div>

        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td className="board-title">{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Board
