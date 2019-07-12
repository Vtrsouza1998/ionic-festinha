import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-evento',
  templateUrl: './perfil-evento.page.html',
  styleUrls: ['./perfil-evento.page.scss'],
})
export class PerfilEventoPage implements OnInit {

  protected evento:any;
  private key:string;
  
  constructor(
    public eventoService:EventoService,
    public activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    this.evento = this.eventoService.get(this.key);
  }

}
