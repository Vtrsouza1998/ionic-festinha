import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  protected nuser:number =0;
  protected nevent:number =0;
  
  constructor(
    private usuarioService: UsuarioService,
    private eventoService: EventoService
  ) {
    this.usuarioService.getAll()
    .subscribe(
      res=>this.nuser = res.length
      ,
      err=> this.nuser = 0
    );
    this.eventoService.getAll()
    .subscribe(
      res=>this.nevent = res.length
      ,
      err=> this.nevent = 0
    )
  }

}
