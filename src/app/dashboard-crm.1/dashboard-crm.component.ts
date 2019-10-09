import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

    public dashCard = [
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 120, title: 'CLIENTS', icon: 'supervisor_account' },
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 70, title: 'ACTIVE CLIENTS', icon: 'update' },
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 20, title: 'APPONIMENT', icon: 'assignments' },
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 15, title: 'TODAY APPONIMENT', icon: 'update' }
    ];

    

    constructor() { }

    ngOnInit() {
    }

}
