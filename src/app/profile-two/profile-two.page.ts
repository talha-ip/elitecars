import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-two',
  templateUrl: './profile-two.page.html',
  styleUrls: ['./profile-two.page.scss'],
})
export class ProfileTwoPage implements OnInit {
  public itemPerson = [
    { icon: "assets/CustomIcons/profile-two-person.svg", name: "Andrew" },
    { icon: "assets/CustomIcons/profile-two-person.svg", name: "John" },
  ];
  public itemDob = [
    { icon: "assets/CustomIcons/profile-two-cake.svg", name: "Date of Birth", acName: "12-02-1980" },
    { icon: "assets/CustomIcons/profile-two-gender.svg", name: "Gender", acName: "Male" },
    { icon: "assets/CustomIcons/profile-two-profession.svg", name: "Profession", acName: "Business Manager" },
    { icon: "assets/CustomIcons/profile-two-marital-status.svg", name: "Marital Status", acName: "Married" },
  ];
  public itemInput = [
    { iconStart: "assets/CustomIcons/profile-two-email.svg", placeHolder: "AndrewJohns.123@gmail.com", type: "email", iconLast: "assets/CustomIcons/profile-two-checked.svg" },
    { iconStart: "assets/CustomIcons/profile-two-phone-call.svg", placeHolder: "000-111-222-333", type: "tel", iconLast: "assets/CustomIcons/profile-two-checked.svg" },
  ];
  public langInterest = [
    { icon: "assets/CustomIcons/profile-two-language.svg", name: "Languages Speak", acName: "English, French" },
    { icon: "assets/CustomIcons/profile-two-interest.svg", name: "Interests", acName: "Travelling, Reading" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
