import ArticleHeader from './ArticleHeader'
import ArticleTitle from './ArticleTitle'
import EmailActions from './EmailActions'
import EmailBody from './EmailBody'

function Article() {
  return (
    <article className="email-content">
      <ArticleTitle />
      <ArticleHeader />
      <EmailBody />

      <EmailActions />
    </article>
  )
}

export default Article
