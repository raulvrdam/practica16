import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  validations_form: FormGroup;
  partido: FormGroup;
  validation_messages = {
    'FechaPartido': [
      { type: 'required', message: 'La fecha del partido es requerida.' }
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController) { }

    ngOnInit() {

      this.partido = new FormGroup({
        FechaPartido: new FormControl('', Validators.required)
      });
  
      this.validations_form = this.formBuilder.group({
        partido: this.partido,
      });
    }

  onSubmit(values) {
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        partido: JSON.stringify(values),
      }
    };
    this.navCtrl.navigateForward('/partido', navigationExtras);
  }
}
