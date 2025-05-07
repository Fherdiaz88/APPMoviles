import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle
  ]
})
export class RegisterPage {
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const usuario = {
      email: this.correo, 
      password: this.password
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Cuenta creada exitosamente');
    this.router.navigate(['/login']);
    
  }

  
ngOnInit() {
  const fromLogin = sessionStorage.getItem('fromLogin');
  if (fromLogin !== 'true') {
    this.router.navigate(['/login']);
  } else {
    sessionStorage.removeItem('fromLogin');
  }
}

}




