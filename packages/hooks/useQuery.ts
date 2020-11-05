import { useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'

function useQuery({ usePush = true }: { usePush?: boolean } = {}) {
  const history = useHistory()
  const { search, pathname } = useLocation()
  // save query status
  const queryState = useRef(qs.parse(search))

  // update query
  const setQuery = (handler) => {
    const nextQuery = handler(queryState.current)
    queryState.current = nextQuery

    // replace会使组件重新渲染
    // push可以保留前进后退的记录
    const historyFunc = usePush ? history.push : history.replace
    historyFunc({
      pathname: pathname,
      search: qs.stringify(nextQuery),
    })
  }

  return [queryState.current, setQuery]
}

export default useQuery
