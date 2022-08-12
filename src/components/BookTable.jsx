import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

export default function BookTable() {
  let [posts, setPosts] = useState([])

  const columns = [
    {
      datafild: 'id'
      text: 'Id'
    }, {
      dataField: 'title',
      text: 'title'
    }, {
      dataField: 'body',
      text: 'texto'
    }];


  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response = response.jason())
      .then(data => {
        useEffect(data)
      })
  }

  useEffect(() => {

  }, []);


}]

return {(
  <div>
    <BootstrapTable keyField='id' data={posts} columns={[]} />
  </div>

)
}
