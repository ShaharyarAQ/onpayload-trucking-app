import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/map",
    title: "Map",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/loads",
    title: "Loads",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-components",
    class: ""
  },
  {
    path: "/income",
    title: "Income",
    rtlTitle: "الرموز",
    icon: "icon-coins",
    class: ""
  },
  {
    path: "/expenses",
    title: "Expenses",
    rtlTitle: "قائمة الجدول",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/team",
    title: "Team",
    rtlTitle: "إخطارات",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/invoices",
    title: "Invoices",
    rtlTitle: "إخطارات",
    icon: "icon-paper",
    class: ""
  },
  {
    path: "/fleet",
    title: "Fleet",
    rtlTitle: "طباعة",
    icon: "icon-bus-front-12",
    class: ""
  },
  // {
  //   path: "/reports",
  //   title: "Reports",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  {
    path: "/IFTA",
    title: "IFTA",
    rtlTitle: "إخطارات",
    icon: "icon-money-coins",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  logo:string = "assets/img/onpayload.jpg";

  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
