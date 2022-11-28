import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  Name=""
  rollNo=""
  adminNo=""
  mobileNo=""
  collegeName=""
  parentName=""
  parentPhno=""
  username=""
  password=""

  readValues=() =>
  {

    let data:any=
    {
      "Name":this.Name,
      "rollNo":this.rollNo,
      "adminNo":this.adminNo,
      "mobileNo":this.mobileNo,
      "collegeName":this.collegeName,
      "parentName":this.parentName,
      "parentPhno":this.parentPhno,
      "username":this.username,
      "password":this.password
    }

     console.log(data)

  }

}
