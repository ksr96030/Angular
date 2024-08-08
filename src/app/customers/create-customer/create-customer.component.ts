// src/app/customers/create-customer/create-customer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  customer: Customer = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    subscriptionType: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.createCustomer(this.customer).subscribe(
      response => {
        // Handle successful customer creation
        alert('Customer created successfully');
        this.router.navigate(['/customers']);  // Ensure this route is configured
      },
      error => {
        // Handle error
        alert('Customer creation failed');
      }
    );
  }
}
