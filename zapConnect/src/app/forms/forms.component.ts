import { Component, ViewChild, ElementRef } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  pessoa: Pessoa = {
    nome: '',
    empresa: '',
    cargo: '',
    numero: '',
    cidade: '',
    pais: '',
    imagem: new Object,
    idd: '',
    whatsappLink: ''
  };

  idd: Array<any> = [
    { label: '+93 Afeganistão', value: '93' },
    { label: '+27 África do Sul', value: '27' },
    { label: '+355 Albânia', value: '355' },
    { label: '+49 Alemanha', value: '49' },
    { label: '+376 Andorra', value: '376' },
    { label: '+244 Angola', value: '244' },
    { label: '+54 Argentina', value: '54' },
    { label: '+374 Armênia', value: '374' },
    { label: '+61 Austrália', value: '61' },
    { label: '+43 Áustria', value: '43' },
    { label: '+994 Azerbaijão', value: '994' },
    { label: '+1-242 Bahamas', value: '1-242' },
    { label: '+973 Bahrein', value: '973' },
    { label: '+880 Bangladesh', value: '880' },
    { label: '+1-246 Barbados', value: '1-246' },
    { label: '+32 Bélgica', value: '32' },
    { label: '+375 Bielorrússia', value: '375' },
    { label: '+591 Bolívia', value: '591' },
    { label: '+387 Bósnia e Herzegovina', value: '387' },
    { label: '+267 Botsuana', value: '267' },
    { label: '+55 Brasil', value: '55' },
    { label: '+673 Brunei', value: '673' },
    { label: '+359 Bulgária', value: '359' },
    { label: '+238 Cabo Verde', value: '238' },
    { label: '+237 Camarões', value: '237' },
    { label: '+1 Canadá', value: '1' },
    { label: '+7 Cazaquistão', value: '7' },
    { label: '+235 Chade', value: '235' },
    { label: '+56 Chile', value: '56' },
    { label: '+86 China', value: '86' },
    { label: '+57 Colômbia', value: '57' },
    { label: '+269 Comores', value: '269' },
    { label: '+242 Congo, República do', value: '242' },
    { label: '+243 Congo, República Democrática do', value: '243' },
    { label: '+82 Coreia do Sul', value: '82' },
    { label: '+506 Costa Rica', value: '506' },
    { label: '+385 Croácia', value: '385' },
    { label: '+53 Cuba', value: '53' },
    { label: '+45 Dinamarca', value: '45' },
    { label: '+20 Egito', value: '20' },
    { label: '+503 El Salvador', value: '503' },
    { label: '+971 Emirados Árabes Unidos', value: '971' },
    { label: '+593 Equador', value: '593' },
    { label: '+34 Espanha', value: '34' },
    { label: '+1 Estados Unidos', value: '1' },
    { label: '+372 Estônia', value: '372' },
    { label: '+251 Etiópia', value: '251' },
    { label: '+679 Fiji', value: '679' },
    { label: '+63 Filipinas', value: '63' },
    { label: '+358 Finlândia', value: '358' },
    { label: '+33 França', value: '33' },
    { label: '+233 Gana', value: '233' },
    { label: '+30 Grécia', value: '30' },
    { label: '+502 Guatemala', value: '502' },
    { label: '+592 Guiana', value: '592' },
    { label: '+504 Honduras', value: '504' },
    { label: '+852 Hong Kong', value: '852' },
    { label: '+36 Hungria', value: '36' },
    { label: '+354 Islândia', value: '354' },
    { label: '+91 Índia', value: '91' },
    { label: '+62 Indonésia', value: '62' },
    { label: '+98 Irã', value: '98' },
    { label: '+964 Iraque', value: '964' },
    { label: '+353 Irlanda', value: '353' },
    { label: '+972 Israel', value: '972' },
    { label: '+39 Itália', value: '39' },
    { label: '+1-876 Jamaica', value: '1-876' },
    { label: '+81 Japão', value: '81' },
    { label: '+962 Jordânia', value: '962' },
    { label: '+686 Kiribati', value: '686' },
    { label: '+856 Laos', value: '856' },
    { label: '+266 Lesoto', value: '266' },
    { label: '+371 Letônia', value: '371' },
    { label: '+231 Libéria', value: '231' },
    { label: '+961 Líbano', value: '961' },
    { label: '+370 Lituânia', value: '370' },
    { label: '+352 Luxemburgo', value: '352' },
    { label: '+60 Malásia', value: '60' },
    { label: '+265 Malawi', value: '265' },
    { label: '+960 Maldivas', value: '960' },
    { label: '+223 Mali', value: '223' },
    { label: '+356 Malta', value: '356' },
    { label: '+212 Marrocos', value: '212' },
    { label: '+230 Maurício', value: '230' },
    { label: '+52 México', value: '52' },
    { label: '+258 Moçambique', value: '258' },
    { label: '+264 Namíbia', value: '264' },
    { label: '+977 Nepal', value: '977' },
    { label: '+64 Nova Zelândia', value: '64' },
    { label: '+505 Nicarágua', value: '505' },
    { label: '+234 Nigéria', value: '234' },
    { label: '+47 Noruega', value: '47' },
    { label: '+687 Nova Caledônia', value: '687' },
    { label: '+968 Omã', value: '968' },
    { label: '+92 Paquistão', value: '92' },
    { label: '+507 Panamá', value: '507' },
    { label: '+595 Paraguai', value: '595' },
    { label: '+31 Países Baixos', value: '31' },
    { label: '+51 Peru', value: '51' },
    { label: '+48 Polônia', value: '48' },
    { label: '+351 Portugal', value: '351' },
    { label: '+254 Quênia', value: '254' },
    { label: '+44 Reino Unido', value: '44' },
    { label: '+1-809 República Dominicana', value: '1-809' },
    { label: '+420 República Tcheca', value: '420' },
    { label: '+40 Romênia', value: '40' },
    { label: '+7 Rússia', value: '7' },
    { label: '+381 Sérvia', value: '381' },
    { label: '+65 Singapura', value: '65' },
    { label: '+963 Síria', value: '963' },
    { label: '+46 Suécia', value: '46' },
    { label: '+41 Suíça', value: '41' },
    { label: '+66 Tailândia', value: '66' },
    { label: '+90 Turquia', value: '90' },
    { label: '+380 Ucrânia', value: '380' },
    { label: '+598 Uruguai', value: '598' },
    { label: '+998 Uzbequistão', value: '998' },
    { label: '+58 Venezuela', value: '58' },
    { label: '+84 Vietnã', value: '84' },
    { label: '+967 Iémen', value: '967' },
    { label: '+260 Zâmbia', value: '260' },
    { label: '+263 Zimbábue', value: '263' }
  ];

  number!: number;
  selectedIdd: string = '55';
  upload: Array<any> = [];

  constructor(public poNotification: PoNotificationService, private router: Router ) {
    this.pessoa.idd = this.selectedIdd;
  }

  onCLickDownload(){
    if (String(this.number).length <= 9) {
      this.poNotification.error('Número inválido. informe o código de área (DD), por exemplo: 479882342245.');
      return;
    }else{
      this.openWhatsApp();
      this.navigateToWallpaper();
    }
  }

  navigateToWallpaper() {
    this.router.navigate(['/app-wallpaper'], { queryParams: { pessoa: JSON.stringify(this.pessoa) } });
  }

  openWhatsApp() {
    const completo = this.number.toString();

    const dd = completo.substring(0, 2);
    const number = completo.substring(2);

    this.pessoa.numero =  `${this.pessoa.idd}${dd}${number}`

    if (this.pessoa.numero) {
      this.pessoa.whatsappLink= `https://wa.me/${this.pessoa.numero}`;
     // window.open(this.pessoa.whatsappLink, '_blank');
    } else {
      alert("Por favor, insira um número de telefone.");
    }
  }

  onChangeIdd(newIdd: any) {
    this.pessoa.idd = newIdd;
  }

}
