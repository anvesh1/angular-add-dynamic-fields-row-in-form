# angular-add-dynamic-fields-row-in-form
Add dynamic fields rows inside a form using angular
Setup your project using angular cli "ng new dynamic-fields-row-in-form"
Run "ng generate component user-list" using angular cli, it will setup your initial component

add reactive form module inside app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
]

now replace all files of user-list component folder with the files provided here
