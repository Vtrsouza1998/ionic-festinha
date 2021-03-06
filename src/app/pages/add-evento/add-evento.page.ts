import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/model/evento';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
})
export class AddEventoPage implements OnInit {
  evento: Evento;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public eventoService: EventoService,
  ) { }

  ngOnInit() {
    this.evento = new Evento;
  }

  onSubmit(form){
    if (form.valid){
      //console.log("cadastrado", this.evento);
      this.eventoService.save(this.evento)
        .then(
          res=>{
            this.presentAlert("Aviso", "cadastrado!");
            form.reset();
             this.router.navigate(['/']);
          },
          err=>{
            this.presentAlert("Epa!", "Erro ao cadastrar!");
          }
        )     
    }   
  }

  async presentAlert(titulo:string, texto:string) {
    const alert = await this.alertController.create({     
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

}
