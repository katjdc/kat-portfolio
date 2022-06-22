import { Component, OnInit } from '@angular/core';

// Import EmailJS for Form
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('katrinejdc_email', 'template_iudq4q7', e.target as HTMLFormElement, 'f9h9Kj3Mh122eVksT')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent a message!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
