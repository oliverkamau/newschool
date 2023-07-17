import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {TokenService} from "../services/token.service";
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import Swal from 'sweetalert2'
import {Users} from "./models/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  user: Users ={userId :'', userPhone : '',
                userAddress : '', userGender : '',userLastname : '',
                userFirstname : '', username : '', userSupervisor : '',
                userTeacherRef: '', userType : '', previousLogin : '',
                status : '', password : '', createdDate : '', email : ''
  };
  org = 'Select Organisation';
  // @ts-ignore
  dropdownSettings: IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  setUser: string = '';
  support = 'Assign Support';
  selectedSupport = [];
  supportList = [];
  organisation: number = 0;
  external: boolean = false;
  one: boolean = false;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;
  six: boolean = false;
  supportUsers = [];
  receipients: string ='';
  files: File[] = [];
  // @ts-ignore
  @ViewChild('uploadControl') uploadControl: ElementRef;
  uploadFileName = 'Choose File';
  inhouse = 'Copy Inhouse';
  clientList = [];
  selectedClient = [];
  clientUsers = [];
  userId: string = '';
  wording: string = '';
  type: string = '';
  priority: string = '';
  mails: string = '';
  subject: string = '';
  tags: string = '';
  constructor(public token: TokenService, public service: UserService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setUser = this.token.getUserName();
    this.userId = this.token.getUserId();
    this.searchItems();
    this.setDropDown();
    this.resetOrgModel();
    this.getOrganisation();

  }
  setDropDown(): void{
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,

    };
  }

  getOrganisation(): void{
    // this.service.getUsers(this.token.getToken(), this.token.getClientId()).subscribe(
    //   resp => {
    //     console.log(resp);
    //     if (resp.message === 'data'){
    //       this.selectedItems = [{id: resp.orgCode , text: resp.name}];
    //       this.organisation = resp.orgCode;
    //       this.getClientList();
    //       this.getSupportList();
    //     }
    //   }
    // );
  }

  onItemSelect(item: any): void{
    // this.organisation = item.id;
    // this.getClientList();
    // this.getSupportList();
  }

  onSelectAll(item: any[]): void{
    console.log(item);
  }

  getItems($event: any): void{
    // this.service.getParams(this.token.getToken(), $event).subscribe(
    //   resp => {
    //     this.dropdownList = resp.data;
    //   }
    // );
  }
  searchItems(): void{
    // this.service.searchParams(this.token.getToken()).subscribe(
    //   resp => {
    //     this.dropdownList = resp.data;
    //   }
    // );
  }
  resetOrgModel(): void{
    // this.service.org = {
    //   orgCode: 0,
    //   name: '',
    //   message: ''
    // };
  }

  onSupportSelect(item: any): void{

    // this.supportUsers.push(item.id);
    // console.log(this.supportUsers);
  }

  onSupportSelectAll(item: any[]): void{
    // item.forEach((obj) => {
    //   this.supportUsers.push(obj.id);
    // });
    // console.log(this.supportUsers);
  }

  getSupport(item: any): void{
    // this.service.searchSupport(this.token.getToken(), item, this.organisation.toString()).subscribe(
    //   resp => {
    //     this.dropdownList = resp.data;
    //   }
    // );
  }

  getSupportList(): void{
    // this.service.getSupport(this.token.getToken(), this.organisation.toString()).subscribe(
    //   resp => {
    //     this.supportList = resp.data;
    //   }
    // );
  }

  onFileChange(e: any): void{
    // this.files = [];
    // if (e.target.files && e.target.files[0]) {
    //
    //   this.uploadFileName = '';
    //   Array.from(e.target.files).forEach((file: File) => {
    //     this.files.push(file);
    //     this.uploadFileName += file.name + '  ';
    //   });
    //   // console.log(this.files);
    //   this.uploadControl.nativeElement.value = '';
    // } else {
    //   this.uploadFileName = 'Choose File';
    // }
  }


  saveIssue(value: any): void{
    // Swal.fire({
    //   title: 'Sending Issue...',
    //   html: 'Please Wait...',
    //   showCancelButton: false,
    //   showConfirmButton: false,
    // })
    // Swal.showLoading();
    // const formData = new FormData();
    // if (this.files !== undefined && this.files.length !== 0) {
    //   for (const file of this.files) {
    //     formData.append('files', file);
    //   }
    // }
    // formData.append('requester', this.userId);
    // formData.append('organisation', this.organisation.toString());
    // if (this.supportUsers.length !== 0) {
    //
    //   for (const support of this.supportUsers) {
    //     formData.append('support', support);
    //   }
    // }
    // if (this.clientUsers.length !== 0) {
    //
    //   for (const client of this.clientUsers) {
    //     formData.append('copied', client);
    //   }
    // }
    // formData.append('mailReceipients', this.mails);
    // formData.append('description', this.wording);
    // formData.append('subject', this.subject);
    // formData.append('type', this.type);
    // formData.append('priority', this.priority);
    // formData.append('tags', this.tags);
    // this.service.saveIssue(formData, this.token.getToken()).subscribe(
    //   resp => {
    //     Swal.close();
    //     Swal.fire(
    //       'Success',
    //       resp.response,
    //       'success'
    //     );
    //   },
    //   error => {
    //     Swal.close();
    //     Swal.fire(
    //       'Error',
    //       error.error.message,
    //       'error'
    //     );
    //   }
    // );
  }

  onItemDeSelect($event: any): void{
    // if(this.supportUsers.length !== 0) {
    //   this.supportUsers.splice(this.supportUsers.indexOf($event.id), 1);
    // }
    // console.log(this.supportUsers);
  }

  onItemDeSelectAll($event: any): void{
    // this.supportUsers = [];
    // console.log(this.supportUsers);
  }

  onClientSelect($event: any): void{
    // this.clientUsers.push($event.id);
    // console.log(this.clientUsers);
  }

  onClientSelectAll($event: any[]): void{
    // $event.forEach((obj) => {
    //   this.clientUsers.push(obj.id);
    // });
    // console.log(this.clientUsers);
  }

  getClient($event: any): void{
    // this.service.searchClient(this.token.getToken(), $event, this.organisation.toString()).subscribe(
    //   resp => {
    //     this.clientList = resp.data;
    //   }
    // );
  }
  getClientList(): void{
    // this.service.getClient(this.token.getToken(), this.organisation.toString()).subscribe(
    //   resp => {
    //     this.clientList = resp.data;
    //   }
    // );
  }
  onClientDeSelect($event: any): void{
    // if(this.clientUsers.length !== 0) {
    //   this.clientUsers.splice(this.clientUsers.indexOf($event.id), 1);
    // }
    // console.log(this.clientUsers);
  }

  onClientDeSelectAll($event: any[]): void{
    // this.clientUsers = [];
    // console.log(this.clientUsers);
  }

  setExternal(): void{
    // this.external = !this.external;
  }
}
