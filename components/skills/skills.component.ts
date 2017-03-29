import { CustomnodeService } from './../../services/customnode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [CustomnodeService]
})
export class SkillsComponent implements OnInit {
  data: any;
  public showData: any = [];
  constructor(private customnodeService: CustomnodeService) { }

  ngOnInit() {
  }

  getSkills(skillsObj: any) {
    this.showData = [];
    this.customnodeService.readSkills(skillsObj).subscribe(res => {
      this.data = JSON.parse(res["_body"]);
      this.data.forEach(element => {
        this.showData.push(element.name);
      });
    }, err => {
      console.log(err)
    });
  }

  addSkill(skillsObj: any) {
    this.showData = [];
    if(skillsObj.name !== undefined && skillsObj.name !== ""){
      this.customnodeService.createSkill(skillsObj).subscribe(res => {
        this.data = JSON.parse(res["_body"]);
        this.data.forEach(element => {
          this.showData.push(element.name);
        });
      }, err => {
        console.log(err)
      });
    }
    else{
      this.showData.push("Please enter a skill");
    }
  }
}