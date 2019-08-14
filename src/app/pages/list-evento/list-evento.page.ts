import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import {MensagensService } from './../../services/mensagens.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.page.html',
  styleUrls: ['./list-evento.page.scss'],
})
export class ListEventoPage implements OnInit {

  protected evento: any;

  constructor(
    public eventoService: EventoService,
    public msg: MensagensService
  ) { }

  ngOnInit() {
    this.evento = this.eventoService.getAll();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  atualizar(){}

  remover(key: string){
    this.eventoService.delete(key);
    this.msg.presentLoading();
  }
}
