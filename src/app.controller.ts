import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()              
export class AppController {

  //Home page  
  @Get('/')              
  homePage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  //Login page al entrar
  @Get('/login')
  loginPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'login.html'));
  }

  @Get('/cliente')
  paginaCliente(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'cliente', 'index.html'));
  }

  @Get('/profesional')
  paginaProfesional(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'profesional', 'index.html'));
  }
  
  @Get('/cliente/professional/:id')
  clienteProfesional(
    @Res() res: Response, 
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log(id);
    return res.sendFile(join(__dirname, '..', 'public', 'cliente', 'profesional.html'));
  }


  // ----------------------------------------------------------------------
  // ------------------ Migrar luego esta logica al AUTH ------------------
  // ----------------------------------------------------------------------

  //Login page al enviar un post
  @Post('/login')
  login(@Body('type') type: string, @Res() res: Response) {

  if (type == 'client') {
    return res.redirect('/cliente');        
  }
  if (type == 'professional') {
    return res.redirect('/profesional');    
  }
  return res.redirect('/');             
  
  }
   
}
