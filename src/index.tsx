import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Freela de App',
          type: 'deposit',
          category: 'Dev',
          amount: 4500,
          createdAt: new Date('2021-02-20 18:00:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1050,
          createdAt: new Date('2021-02-05 13:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)

    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
