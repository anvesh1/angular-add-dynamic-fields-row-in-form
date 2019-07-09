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

  // Add form field row with initial data
  formRowWithData(data): FormGroup {
    return this.fb.group({    
      name: [data.name, Validators.required],  
      email: data.email,
      mobNumber: data.mobNumber
    });
  }

  // Add form field row with no data
  formRowWithOutData(): FormGroup {
    return this.fb.group({    
      name: ['', Validators.required],  
      email: [''],
      mobNumber: ['']
    });
  }

  // Dummy json 
  initialData = [
    {name : "a", email : "a@b.com", mobNumber:  "1111"},
    {name : "b", email : "b@c.com", mobNumber:  "2222"},
    {name : "c", email : "c@d.com", mobNumber:  "3333"}
  ]

  // Add new row in form
  addUser() {
    const control = <FormArray>this.userForm.get('users');
    control.push(this.formRowWithOutData());  
  }

  // Render initial data
  renderUser(){
    const control = <FormArray>this.userForm.get('users');
    for (let data of this.initialData ) {
      control.push(this.formRowWithData(data));  
    }
  }

  // Remove desired user row
  remove(index: number) {
    const control = <FormArray>this.userForm.get('users');
    control.removeAt(index);  
  }

  // Get form data
  save() {
    console.log(this.userForm.value);
  }
  
}
