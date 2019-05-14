import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListavatarsService } from '../list-avatars.service';

@Component({
  selector: 'app-avatar-create',
  templateUrl: './avatar-create.component.html',
  styleUrls: ['./avatar-create.component.css']
})
export class AvatarCreateComponent implements OnInit {
  creationForm: FormGroup;

  constructor(private fb: FormBuilder, private ListavatarsService: ListavatarsService) { }

  ngOnInit() {
    this.createForm();
  }

  // notre creation d'avatar avec le module forms
  createForm() {
    this.creationForm = this.fb.group({
      name: '',
      tel: '',
      content: '',
      image: '',
    });
  }

  // notre submit
  createAvatar() {
    if(this.creationForm.valid) {
      console.log(this.creationForm.value);
      this.ListavatarsService
      .createAvatar(this.creationForm.value)
      .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    };
  };

  handleSuccess(data) {
    console.log('avatar created', data);
  }

  handleError(error) {
    console.error('KO avatar created', error);
  }
}
