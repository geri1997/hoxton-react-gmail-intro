import Article from './Article'
import EmailNav from './EmailNav'
import Reply from './Reply.jsx'

function Main() {
  return (
    <main className="email-view">
      <EmailNav />
      <Article />
      <Reply />
    </main>
  )
}

export default Main
