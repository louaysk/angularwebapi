import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail-service';
import { PaymentDetail } from '../shared/payment-detail-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service :PaymentDetailService ,
    public toastr:ToastrService){}

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd : PaymentDetail){
    this.service.formData = Object.assign({},pd) ;
  }

  onDelete(PMID){
    console.log("=============================================")
    console.log("IM the ID",PMID)
    console.log("=============================================")

   if (confirm('Are you sure to delete this record')){
     this.service.DeletePaymentDetail(PMID)

     .subscribe(res => {
     this.service.refreshList();
     this.toastr.warning("Delleted successfuly");
     console.log("IM the ID 2",PMID)
     } ,
     err=>{
     console.log(err);
      })

    }

  }

}
