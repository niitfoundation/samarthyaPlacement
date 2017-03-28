import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers:[CustomnodeService]
})
export class SkillsComponent implements OnInit {

  constructor(private customnodeService:CustomnodeService) { }

  ngOnInit() {
  }

  getSkills(skillsObj:any){
    return this.customnodeService.readSkills(skillsObj);
  }
}