import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showIssueSubmenu = false;
  showExtrasSubmenu = false;
  showHelpSubmenu = false;
  mode = "side"



  constructor(private router: Router,private observer: BreakpointObserver) { }

  ngOnInit(): void {
  this.router.navigate(['home/users'])
  }


  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  mouseenter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  togglesidenav(): void{

    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        if (this.sidenav.opened){
          this.sidenav.mode = 'over';
          this.sidenav.close();
      }
        else{
          this.sidenav.mode = 'over';
          this.sidenav.open();
        }
      } else {
        if (this.sidenav.opened){
          this.sidenav.mode = 'side';
          this.sidenav.close();
        }
        else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    });
  }

}
