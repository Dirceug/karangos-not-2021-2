import * as React from 'react';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { 
    field: 'id', 
    headerName: 'Cód.', 
    type: 'number',
    width: 100 },
  { 
    field: 'nome', 
    headerName: 'Nome do Cliente', 
    width: 250 },
  { 
    field: 'cpf', 
    headerName: 'CPF', 
    width: 150 },
  {
    field: 'rg',
    headerName: 'Doc. Identidade',
    width: 150,
  },
  {
    field: 'telefone',
    headerName: 'Telefone',
    width: 150
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 200,
  },
];



export default function ClientesList() {

  const [state, setState] = React.useState({
    clientes:[]
  })
  const { clientes } = state

  React.useEffect(() => {
    //  React.useEffect(() => {}, []) ===> Padrão do useEffect()

    //usando o axios para acessar a API remota e obter os dados
    axios.get('https://api.faustocintra.com.br/clientes').then( //Callback para o caso de sucesso
        response => setState({... state, clientes: response.data})
        )


  }, []) //vetor de dependência vazio -> useEffect()
         //será executado apenas uma vez, durante o carregamento(montagem) do componente



  return (
    <>
      <h1>Listagem de Clientes</h1>
      <Paper elevation={4}>
        <DataGrid
          rows={clientes}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          autoHeight
          />
      </Paper>

    </>
  )
}