import { Component, OnInit } from '@angular/core';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule, NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule,
            NgFor,
            MatButtonModule,
            ReactiveFormsModule,
            CommonModule,
          ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogComponent implements OnInit{
  
FreshnesList=["Brand New","Repablished","Second Hand"]
productForm !:FormGroup;
constructor(private dialog:MatDialog, private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.productForm = this.formBuilder.group({
    productName:['',Validators.required],
    Category:['',Validators.required],
    freshnesh:['',Validators.required],
    price:['',Validators.required],
    comment:['',Validators.required],
    date:['',Validators.required]
  })
}

addProduct(){
  console.log(this.productForm.value);
}
}
