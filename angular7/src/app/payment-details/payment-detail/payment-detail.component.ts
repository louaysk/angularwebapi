import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail-service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-detail-model';
import { ToastrService } from 'ngx-toastr';
// import { format } from 'path';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: []
})
export class PaymentDetailComponent implements OnInit {
  formData:PaymentDetail;

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
this.service.formData = {
pmid:0,
cardOwnerName:'',
cardNumber:'',
expirationDate:'',
cvv:''
}
}

onSubmit(form:NgForm){

if (this.service.formData.pmid == 0 )

this.insertRecord(form);

else
//update
this.updateRecord(form);
   }

   insertRecord(form:NgForm){
    this.service.PostPaymentDetail().subscribe(
      res=>{
       this.resetForm(form);
       this.toastr.success('Submitted successfully');
       this.service.refreshList();
      },
      Err => {
       console.log(Err);
      }

     )
   }

   updateRecord(form:NgForm){
    this.service.PutPaymentDetail().subscribe(
      res=>{
       this.resetForm(form);
       this.toastr.info('Update successfully');
       this.service.refreshList();
      },
      Err => {
       console.log(Err);
      }

     )
   }
}

