import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  readonly apiUrl = 'http://localhost:50306/api/';
  readonly photoUrl = 'http://localhost:50306/Photos/';

  constructor(private http: HttpClient) {}

  //Department
  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'department/GetDepartment/');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'department/AddDepartment/',
      dept,
      httpOptions
    );
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'department/UpdateDepartment/',
      dept,
      httpOptions
    );
  }

  deleteDepartment(deptID: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'department/DeleteDepartment/' + deptID,
      httpOptions
    );
  }

  //Employee
  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetEmployee/');
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'employee/AddEmployee/',
      emp,
      httpOptions
    );
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'employee/UpdateEmployee/',
      emp,
      httpOptions
    );
  }

  deleteEmployee(empId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<any>(
      this.apiUrl + 'employee/DeleteEmployee/' + empId,
      httpOptions
    );
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
  }
}
