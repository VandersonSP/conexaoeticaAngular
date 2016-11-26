import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'form-cmp',
  templateUrl: './forms.component.html'
})

export class FormComponent {
  requiredOption:boolean = true;
  finishRelat:boolean = false;
  termosaceitos:boolean = false;
  anonimo:any = null;

  aceitarTermos():void {
    if (this.anonimo == null) {
      this.requiredOption = false;
    } else {
      this.termosaceitos = true;
      this.finishRelat = true;
    }
  }

  finishRelatFalse():void {
    this.finishRelat = false;
    this.anonimo = null;
    this.termosaceitos = false;
  }

}
