import MarkdownView, { ShowdownExtension } from 'react-showdown'
import _ from './Markdown.module.css'
import UserName from './UserName'

const hash: ShowdownExtension = {
  type: 'lang',
  regex: /#([^#\s]+)/g,
  replace: '<a href="/hashtag/$1">#$1</a>',
}
const mention: ShowdownExtension = {
  type: 'lang',
  regex: /@([^@\s]+)/g,
  replace: (match: string, username: string) => `<UserName id=${username} />`,
}

export default function Markdown({ raw }: any) {
  return (
    <div className={_.markdown}>
      <MarkdownView
        markdown={raw}
        extensions={[hash, mention]}
        components={{ UserName }}
      />
    </div>
  )
}
