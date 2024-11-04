import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrl: './wallpaper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WallpaperComponent {
 // pessoa!: Pessoa;
  qrCodeDataUrl: string | undefined;
  logoUrl: string = '';

  pessoa: Pessoa = {
    nome: 'Bruno Scholze',
    empresa: 'Totvs',
    cargo: 'Analsita de desenvolvimento',
    numero: '556789773585',
    cidade: 'Joinville',
    pais: 'Brasil',
    imagem: [],
    idd: '55',
    whatsappLink: "https://wa.me/556789773585",
    imageUrl: "blob:http://localhost:4200/15d1c13e-9bb2-48eb-9ae3-088512c5f59b"
  };

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
  /*  this.route.queryParams.subscribe(params => {
      if (params['pessoa']) {
        this.pessoa = JSON.parse(params['pessoa']);

      }
    });*/
    this.genereateLogo();
    this.generateQrCode();

  }

  generateQrCode() {
    const whatsappLink = this.pessoa.whatsappLink;
    QRCode.toDataURL(
      whatsappLink,
      {
        width: 200,
        color: {
          dark: "#000000", // Cor dos "pixels" (preto por padrão)

        }
      },
      (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        this.qrCodeDataUrl = url;
      }
    );
  }

  getImageUrl() {
    return URL.createObjectURL(this.pessoa.imagem[0].rawFile);
  }

  genereateLogo(): void {
    const url = 'https://logo.clearbit.com/neogrid.com';
    this.logoUrl = url;
  }
}
