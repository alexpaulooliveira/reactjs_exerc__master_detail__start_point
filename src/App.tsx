import React, {useState, useEffect} from 'react'

function App() {
  const urlcurso = 'SUA URL PARA CARREGAMENTO DOS CURSOS'
  const urldisc  = 'SUA URL PARA CARREGAMENTO DAS DISCIPLINAS EM FUNÇÃO DO CURSO SELECIONADO'
    
  const columns = [
    {
      dataField: 'id_disciplina',
      text: 'Código',
      sort: true
    },                 
    {
      dataField: 'tx_sigla',
      text: 'Sigla',
      sort: true
    },                     
    {
      dataField: 'tx_descricao',
      text: 'Descrição',
      sort: true
    },
    {
      dataField: 'in_periodo',
      text: 'Período',
      sort: true
    },    
    {
      dataField: 'in_carga_horaria',
      text: 'Carga Horária',
      sort: true
    },        
  ]  
  
  {/* Código JSX Aqui, substituindo a linha abaixo */}
  return null  
}

export default App;