import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-e-competence-item',
  templateUrl: './e-competence-item.component.html',
  styleUrls: ['./e-competence-item.component.sass']
})
export class ECompetenceItemComponent {
 @Input() competence:any={
  titre:'',
  description:'',
  hasMore:false,
  domaine:'',
  entreprise:''
 }

  @Input() paire:boolean;
}
