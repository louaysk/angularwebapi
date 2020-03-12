import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail-model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData : PaymentDetail;
  readonly rootURL= `https://localhost:44393/api`;
  List : PaymentDetail[] ;


  constructor(private http:HttpClient) {

  }
  PostPaymentDetail()
  {
    return this.http.post(this.rootURL+`/PaymentDetails`,this.formData);
  }

  PutPaymentDetail()
  {

      return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.pmid, this.formData);
  }

  DeletePaymentDetail(id)
  {
    console.log("im the ID in delete payment details",id)
    return this.http.delete(this.rootURL+`/PaymentDetails/`+ id);

  }

refreshList()
 {
  this.http.get(this.rootURL+`/PaymentDetails`)
  .toPromise()
  .then(res => this.List = res as PaymentDetail[] );
   }

}
