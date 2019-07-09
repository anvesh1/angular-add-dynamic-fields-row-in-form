import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl ,FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
          users: this.fb.array([]) 
    });

    this.renderUser();
  }

  initialForm(data): FormGroup {
    return this.fb.group({    
      name: data.name,  
      email: data.email,
      mobNumber: data.mobNumber
    });
  }

  initialData = [
    {name : "pid1", email : "sourceTable1", mobNumber:  "mapping1"},
    {name : "pid2", email : "sourceTable2", mobNumber:  "mapping2"},
    {name : "pid3", email : "sourceTable3", mobNumber:  "mapping3"}
  ]
  
  addUser() {
    const control = <FormArray>this.userForm.get('users');
    let data = {name : "pid1", email : "sourceTable1", mobNumber:  "mapping1"};

    control.push(this.initialForm(data));  
  }

  renderUser(){
    const control = <FormArray>this.userForm.get('users');
    for (let data of this.initialData ) {
      control.push(this.initialForm(data));  
    }
  }

  remove(index: number) {
    const control = <FormArray>this.userForm.get('users');
    
    control.removeAt(index);  
  }

  save() {
    console.log(this.userForm.value);
  }
  
}
