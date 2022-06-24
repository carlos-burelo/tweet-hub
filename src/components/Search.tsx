import { SearchIcon } from 'shared/icons'
import _ from './Search.module.css'

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

export default function Search({}: Props) {
  return (
    <div className={_.searchBox}>
      <input className={_.search} type='search' placeholder='Buscar' />
      <div className={_.icon}>
        <SearchIcon />
      </div>
    </div>
  )
}
