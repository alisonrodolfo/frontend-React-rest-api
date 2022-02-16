import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import useFetch from "../hooks/useApi"
import { useEffect, useState } from 'react';
import api from "../services/api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

type  Repository = {
  id: number;
  name: string;
  local: string;
  date: string;
  paymentMethod: string;
 shipTo: string;
  amount: string;
}

export default function Orders() {
  //const { data } = useFetch();

  const [orders, setOrders] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  const navigate = useNavigate();
  
  const makeAPICall = async () => {
    try {
      const res = await  api
        .get("/orders")
        .then((response) => { console.log(response); setOrders(response.data) })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    catch (e) {
      console.log(e)
    }
  };

  const deleteDataById  = async (itemId: number)  =>{

    if (itemId) {
      try {
        const res = await api.delete(`/orders/${itemId}`);
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        makeAPICall() ;
      } catch (err) {
      }
    }
  };

 
  useEffect(() => {
    makeAPICall() ;
  }, []);
  
  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(orders)) {
    return <p>There was an error loading your data!</p>;
  }
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
      <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Forma de Pagamento</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              <TableCell align="right"> 
              <Button type="button" onClick={() => navigate('/orders',{ state: { id: row.id} })} variant="outlined" startIcon={<EditIcon />}></Button>
                <Button onClick={ () => deleteDataById(row.id) }  color="error" variant="outlined" startIcon={<DeleteIcon />}></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
