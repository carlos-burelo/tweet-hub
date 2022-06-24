import MarkdownView from 'react-showdown'
import _ from './Markdown.module.css'

interface Props {
  raw: string
}

export default function Markdown({ raw }: Props) {
  return (
    <div className={_.markdown}>
      <MarkdownView markdown={raw} />
    </div>
  )
}
