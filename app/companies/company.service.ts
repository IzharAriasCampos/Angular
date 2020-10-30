import {Injectable} from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../alert/alert.service'
import { Company } from './company'

@Injectable()
export class CompanyService{

  urlServer: string = 'http://localhost:8090/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http:HttpClient, private alertService:AlertService){}

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.urlServer + 'companies').pipe(
      catchError(e => {
        console.error(`getCompanies error: "${e.message}"`);
        this.alertService.error(`Error al consultar los juegos: "${e.message}"`)
        return throwError(e);
      })
    );
  }

}
