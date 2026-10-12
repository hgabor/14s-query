import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(
    @Query('title') title : string = 'Valami', // He nem adjuk meg, az = utáni érték a default
    @Query('bgcolor') bgcolor: string = 'white',
    @Query('eletkor') eletkor: string, // Ha nem adjuk meg, undefined
  ) {
    let eletkorSzam = 0;
    if (eletkor) {
      // Minden Query paraméter string! Nekünk kell átalakítani, ha számként szeretnénk vele dolgozni
      eletkorSzam = parseInt(eletkor);
    }

    return {
      title: title,
      bgcolor,
      eletkor: eletkorSzam,
    }
  }
}
