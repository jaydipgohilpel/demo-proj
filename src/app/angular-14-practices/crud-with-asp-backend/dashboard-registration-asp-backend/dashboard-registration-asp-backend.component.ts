import { Component, OnInit } from '@angular/core';
import { RegistrationDetailsService } from 'src/app/services/registration-details.service';

@Component({
  selector: 'app-dashboard-registration-asp-backend',
  templateUrl: './dashboard-registration-asp-backend.component.html',
  styleUrls: ['./dashboard-registration-asp-backend.component.scss']
})
export class DashboardRegistrationAspBackendComponent implements OnInit {

  constructor(private registrationDetailsService: RegistrationDetailsService) { }

  ngOnInit(): void {
    this.registrationDetailsService.getallRegistrationData()
        .subscribe((res) => {
        console.log(res);
        });
  }

}
