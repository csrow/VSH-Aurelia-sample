import {computedFrom} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {inject} from 'aurelia-framework';

@inject (Validation)
export class Welcome {
  
  constructor(validation){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';

    this.validation = validation.on(this)
      .ensure('firstName')
      .isNotEmpty()
      .hasMinLength(3)
      .hasMaxLength(10)
      .ensure('lastName')
      .isNotEmpty()
      .hasMinLength(3)
      .hasMaxLength(10);
  }

  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    this.validation.validate() //the validate will fulfill when validation is valid, and reject if not
      .then(() => {
        alert(`Welcome, ${this.fullName}! `);
  });
}
} 

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}