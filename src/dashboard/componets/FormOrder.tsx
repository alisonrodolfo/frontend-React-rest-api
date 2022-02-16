import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import api from "../../services/api"


interface  Repository {
  id: number;
  name: string;
  local: string;
  date: string;
  paymentMethod: string;
 shipTo: string;
  amount: string;
}


const theme = createTheme();

export default function FormOrder()  {

 const [productCreate, setProductCreate] = useState<string>('')



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      if(data){
          api
          .post("orders", {
            name: data.get('name'),
            shipTo: data.get('shipTo'),
            paymentMethod: data.get('paymentMethod'),
            date: data.get('date'),
            amount: data.get('amount'),
            local: "Loja Virtual"
          })
          .then((response) => {
            console.log(response);
            
            setProductCreate("Criado com Sucesso");
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setProductCreate("Ocorreu um Erro");
          });
      }
   
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Criar Novo Pedido
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="date"
                  type="date"
                  InputLabelProps={{ shrink: true, required: true }}
                  fullWidth
                  id="date"
                  label=" Data"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Produto"
                  name="name"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="shipTo"
                  label="Endereço"
                  name="shipTo"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="paymentMethod"
                  label="Forma de Pagamento"
                  name="paymentMethod"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="amount"
                  label="Preço"
                  name="amount"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Registrar
            </Button>
            <Grid >
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <h2>{productCreate} </h2>
          </div>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
