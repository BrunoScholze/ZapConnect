import { Component, ViewChild, ElementRef } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { Pessoa } from '../../../model/pessoa';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  pessoa: Pessoa= {
    nome: '',
    empresa: '',
    cargo: '',
    numero: '',
    cidade: '',
    pais: '',
    imagem: [],
    idd: '',
    whatsappLink: '',
    imageUrl: ''
  };

  idd: Array<any> = [
    { label: '+93 Afeganistão', value: '93' },
    { label: '+54 Argentina', value: '54' },
    { label: '+61 Austrália', value: '61' },
    { label: '+32 Bélgica', value: '32' },
    { label: '+55 Brasil', value: '55' },
    { label: '+1 EUA/Canada', value: '1' },
    { label: '+86 China', value: '86' },
    { label: '+33 França', value: '33' },
    { label: '+49 Alemanha', value: '49' },
    { label: '+91 Índia', value: '91' },
    { label: '+39 Itália', value: '39' },
    { label: '+81 Japão', value: '81' },
    { label: '+52 México', value: '52' },
    { label: '+31 Países Baixos', value: '31' },
    { label: '+34 Espanha', value: '34' },
    { label: '+41 Suíça', value: '41' },
    { label: '+44 Reino Unido', value: '44' },
    { label: '+598 Uruguai', value: '598' },
];


  number!: number;
  selectedIdd: string = '55';
  upload: Array<any> = [];

  constructor(public poNotification: PoNotificationService, private router: Router ) {
    this.pessoa.idd = this.selectedIdd;
  }

  onCLickDownload(){
    if (String(this.number).length <= 9 && this.pessoa.idd == '55') {
      this.poNotification.error('Número inválido. informe o código de área (DD)');
      return;
    }else{
      this.openWhatsApp();
      this.navigateToWallpaper();
    }
  }

  navigateToWallpaper() {
   // this.router.navigate(['/app-wallpaper'], { queryParams: { pessoa: JSON.stringify(this.pessoa)} });
    this.router.navigate(['/app-theme-forms'], { queryParams: { pessoa: JSON.stringify(this.pessoa)} });

  }

  async openWhatsApp() {
    const completo = this.number.toString();
    const dd = completo.substring(0, 2);
    const number = completo.substring(2);
    this.pessoa.numero = `${this.pessoa.idd}${dd}${number}`;
    const isValidNumber = this.validateWhatsAppNumber(this.pessoa.numero);

    if (isValidNumber) {
      this.pessoa.whatsappLink = `https://wa.me/${this.pessoa.numero}`;
      this.navigateToWallpaper();
    } else {
      this.poNotification.error('Número informado não está correto.');
    }
  }

  validateWhatsAppNumber(number: string): boolean {
    const regex = /^\d{10,15}$/;
    return regex.test(number);
  }


  onChangeIdd(newIdd: any) {
    this.pessoa.idd = newIdd;
  }

  changeInput(event: any){
    this.pessoa.imagem = event;
    const file = this.pessoa.imagem[0].rawFile;
    this.pessoa.imageUrl = URL.createObjectURL(file);
    console.log(this.pessoa)
  }

}
