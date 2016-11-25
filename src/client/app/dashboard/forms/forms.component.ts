import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'form-cmp',
    templateUrl: './forms.component.html'
})

export class FormComponent {
  termosaceitos:boolean = false;
  anonimo:any = null;

  get step1(){
    return this.termosaceitos;
  }
  get step2(){
    return this.termosaceitos && this.anonimo == null && this.anonimo !=false && this.anonimo!= true;
  }
  get anonimamente(){
    return this.anonimo != null && this.anonimo == true && this.termosaceitos;
  }
  get identificacao(){
    return this.anonimo != null && this.anonimo == false && this.termosaceitos;
  }

}
