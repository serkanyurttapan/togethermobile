import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EditAccountDto } from '../model/editaccount';
import { AuthenticationService } from '../services/authentication.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  editAccountDto:EditAccountDto;
  constructor(private editService: EditService,private autService:AuthenticationService) { }

  ngOnInit() {
    this.editProfileUser();
  }
   async editProfileUser() {
    this.editAccountDto =new EditAccountDto();
     (await this.editService.editUserProfile(this.editAccountDto)).pipe(catchError((err) => {
       throw err;
     })).subscribe((res=>{
       console.log(res);
     }))
   }
}
