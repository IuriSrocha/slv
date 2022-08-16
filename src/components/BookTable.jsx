import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';


// https://jsonplaceholder.typicode.com/posts
// 1. Conponente funcional;
// 2. Entra no "return" (montar o HTML - tabela)
// 3. Hook useEffect (fetch API - captura uma lista de objetos)
// 4. useState (variavel e método de atualização -exp. post e setPost)
export default function BookTable() {
  // 1 criar o state que vai conter a lista da api

  let [commemts, setComments] = useState([])
  // let [posts, setPosts] = useState([]);
  // 2 criar o objeto colunas, no qual datafield é a propiedade do objeto
  const columnas = [{
    dataField: 'id',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Nome'
  }, {
    dataField: 'email',
    text: 'Email'
  }, {
    dataField: 'body',
    text: 'Texto'
  }];


  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
  }
  useEffect(() => {
    getComments()
  }, [])


  return (
    <div>
      <BootstrapTable keyField='id' data={commemts} columns={columnas} pagination={paginationFactory()}/>
    </div>
  )
}

