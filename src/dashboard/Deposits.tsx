import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useState, useEffect} from 'react';
import useApi from '../hooks/useApi';
import api from "../services/api";

type  Repository = {
  id: number;
  name: string;
  local: string;
  date: string;
  paymentMethod: string;
 shipTo: string;
  amount: string;
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}


export default function Deposits() {
  const { data: repositories, loading } = useApi<Repository[]>('/orders')
  
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {loading && <p>Carregando...</p>}
        {repositories?.map(repo => {
         return(
          <p>{ repo.amount}</p>
         )
        })}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
