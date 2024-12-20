import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Pessoa } from '../../../model/pessoa';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrl: './wallpaper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WallpaperComponent {
  pessoa!: Pessoa;
  qrCodeDataUrl: string | undefined;
  logoUrl: string = '';

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['pessoa']) {
        this.pessoa = JSON.parse(params['pessoa']);

      }
    });
    
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
          dark: "#000000", ///pRETO
         // dark: "#ffffff", // branco
          //light: "#00000000" // Fundo transparente (RGBA com alfa 0)
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
    const url = `https://logo.clearbit.com/${this.pessoa.empresa}.com`;

    this.logoUrl = url;
  }

  async captureAndDownloadImage() {
    const element = document.getElementById('capture');

    if (element) {
      const canvas = await html2canvas(element, {
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
      });

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, 'image/png');
      });

      if (blob) {

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `zapConnect_${new Date().getTime()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }
  }
}
