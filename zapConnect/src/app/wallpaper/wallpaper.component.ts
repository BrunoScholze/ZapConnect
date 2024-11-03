import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-wallpaper',
  standalone: true,
  imports: [],
  templateUrl: './wallpaper.component.html',
  styleUrl: './wallpaper.component.scss'
})
export class WallpaperComponent {
  pessoa!: Pessoa;
  qrCodeDataUrl: string | undefined;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['pessoa']) {
        this.pessoa = JSON.parse(params['pessoa']);
        console.log(this.pessoa)
      }
    });

    this.generateQrCode();
  }

  generateQrCode() {
    const whatsappLink = this.pessoa.whatsappLink;
    QRCode.toDataURL(whatsappLink, { width: 200 }, (err, url) => {
      if (err) console.error(err);
      this.qrCodeDataUrl = url;
    });
  }
}
