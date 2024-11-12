import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../../model/pessoa';

@Component({
  selector: 'app-theme-forms',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  public lightsThemes: Array<any> = [];
  public darkThemes: Array<any> = [];
  public backGrondBoard: string = 'background-light';
  public flagStyle: string = 'flag-container-white-green';
  public isDarkTheme: boolean = false;
  pessoa!: Pessoa;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.initializeThemes();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['pessoa']) {
        this.pessoa = JSON.parse(params['pessoa']);
      }
    });
  }

  private initializeThemes() {
    this.lightsThemes = [
      { theme: 'light', key: 'light-white', bookMark: 'background-color-white', footer: 'background-color-white', body: 'background-white-theme-card', border: '' },
      { theme: 'light', key: 'light-red', bookMark: 'background-color-red', footer: 'background-color-white', body: 'background-white-theme-card', border: 'border-red' },
      { theme: 'light', key: 'light-green', bookMark: 'background-color-green', footer: 'background-color-white', body: 'background-white-theme-card', border: 'border-green' },
      { theme: 'light', key: 'light-blue', bookMark: 'background-color-blue', footer: 'background-color-white', body: 'background-white-theme-card', border: 'border-blue' },
      { theme: 'light', key: 'light-purple', bookMark: 'background-color-purple', footer: 'background-color-white', body: 'background-white-theme-card', border: 'border-purple' },
    ];

    this.darkThemes = [
      { theme: 'dark', key: 'dark-dark', bookMark: 'footer-dark-theme-card', footer: 'footer-dark-theme-card', body: 'background-dark-theme-card', border: '' },
      { theme: 'dark', key: 'dark-red', bookMark: 'background-color-red', footer: 'footer-dark-theme-card', body: 'background-dark-theme-card', border: 'border-red' },
      { theme: 'dark', key: 'dark-green', bookMark: 'background-color-green', footer: 'footer-dark-theme-card', body: 'background-dark-theme-card', border: 'border-green' },
      { theme: 'dark', key: 'dark-blue', bookMark: 'background-color-blue', footer: 'footer-dark-theme-card', body: 'background-dark-theme-card', border: 'border-blue' },
      { theme: 'dark', key: 'dark-purple', bookMark: 'background-color-purple', footer: 'footer-dark-theme-card', body: 'background-dark-theme-card', border: 'border-purple' },
    ];
  }

  setSelectedTheme(theme: any) {
    this.getFontColor(theme.theme)
    this.backGrondBoard = this.isDarkTheme ? 'background-dark' : 'background-light';
    
    switch (theme.key) {
      case 'light-white':
        this.flagStyle = 'flag-container-white-default';
        break;
      case 'light-red':
        this.flagStyle = 'flag-container-white-red';
        break;
      case 'light-green':
        this.flagStyle = 'flag-container-white-green';
        break;
      case 'light-blue':
        this.flagStyle = 'flag-container-white-blue';
        break;
      case 'light-purple':
        this.flagStyle = 'flag-container-white-purple';
        break;
      case 'dark-dark':
      case 'dark-red':
      case 'dark-red':
      case 'dark-green':
      case 'dark-blue':
      case 'dark-purple':
        this.flagStyle = `flag-container-dark-${theme.key.split('-')[1]}`;
        break;
      default:
        this.flagStyle = 'flag-container-default';
    }
  }

  getFontColor(theme: any){
    if(theme == 'dark'){
      this.isDarkTheme = true
    }else{
      this.isDarkTheme = false
    }
  }

  fim(){
     this.router.navigate(['/app-wallpaper'], { queryParams: { pessoa: JSON.stringify(this.pessoa)} });
 
   }
}
