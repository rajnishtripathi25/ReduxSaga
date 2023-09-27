import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getcatsFetch } from './catstate'

const App = () => {
  const users = useSelector((state) => state.cats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getcatsFetch())
  }, [])
  return (
    <div>
      <ol>
        {
          !users.loading ? users?.cats?.map(data => {
            return <li>{data.name}</li>
          }) : null
        }
      </ol>
    </div>
  )
}

export default App
