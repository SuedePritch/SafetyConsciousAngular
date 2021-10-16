import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {
  buttons: any[]= [
    
    {
      title: 'Home',
      icon: 'home'
    },

    {
      title: 'Emergency',
      icon: 'emergency'
    },

    {
      title: 'Documents',
      icon: 'folder'
    },

    {
      title: 'Certificates',
      icon: 'card_membership'
    },

    {
      title: 'Incidents',
      icon: 'personal_injury'
    },

    {
      title: 'WHMIS',
      icon: 'science'
    },

    {
      title: 'Site Details',
      icon: 'terrain'
    },

    {
      title: 'FLHA',
      icon: 'warning_amber'
    },

    {
      title: 'COVID',
      icon: 'coronavirus'
    },

    {
      title: 'Add Report',
      icon: 'add'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
