import { Component, Input, ViewChild } from '@angular/core';
import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  buttons: Array<PoButtonGroupItem> = [
    { icon: 'ph ph-paperclip',
      selected: true,
      label: 'Escolha um arquivo',
      action: this.action.bind(this)
    },
    { label: '', action: this.action.bind(this) }
  ];

  constructor(){

  }

  action(button: any) {
    alert(`${button.label}`);
  }

}
