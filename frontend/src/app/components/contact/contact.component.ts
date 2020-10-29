import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }

  getContacts(){
    this.contactService.getContacts().subscribe(
      res => {
        this.contactService.contacts = res
      },
      err => console.error(err)
    )
  }

  addContact(form: NgForm){
    this.contactService.createContact(form.value).subscribe(
      res => {
        form.reset();
        window.alert("Su mensaje fue enviado exitosamente."); 
      },
      err => console.log(err)
    )
  }

}
