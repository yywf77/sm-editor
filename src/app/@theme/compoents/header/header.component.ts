import { Component, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbTagComponent, NbTagInputAddEvent, NbThemeService, NbToastrService } from '@nebular/theme';

import { Subject } from 'rxjs';
//import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { TranslateService } from '@ngx-translate/core';
import { map, takeUntil } from 'rxjs/operators';
//import { ISearch, SearchService, SysUser, SysUserService } from 'src/app/@core/services';
//import { EditorService, SearchAction } from 'src/app/editor/scene/editor';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [
     { title: this.translate.instant('menu.pop.user.info'),icon:'user',url:"/#/pages/setting/userInfo"},
     { title: this.translate.instant('menu.pop.user.resetPassword'),icon:'key' ,url:"/#/auth/reset-password"}, 
     { title: this.translate.instant('menu.pop.user.logout') ,icon:'sign-out',url:"/#/auth/logout"} 
  ];

  menus:any[]=[{title:this.translate.instant('menu.pop.messages.title')}];

  isToggleSidebar:boolean = true;

  bellBadgeDot:boolean|any=false;
  emailBadgeDot:boolean|any=false;

  constructor(
    private translate:TranslateService,
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService,
    private menuService: NbMenuService,
    //private userService: SysUserService,
    //private authService:NbAuthService,
    //private searchService:SearchService,
    //private editorService:EditorService,
    private toastrService: NbToastrService,
    private breakpointService: NbMediaBreakpointsService) {

  }

  ngOnInit() {    
    /*this.authService.onTokenChange().subscribe((token:NbAuthToken) =>{
        this.userService.getByUsername(token.getPayload()['sub']).subscribe(res => {
          this.user = res.getEntity();
        })
    });*/
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.isToggleSidebar = !this.isToggleSidebar;
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  /**
   * 更新提示菜单
   * 
   * @param key 
   * @param item 
   */
  updateMenu(title:string,link:string,item:any){
    if(item.text){
      if(this.menus.filter(m=>m.title===this.translate.instant(title)).length===0)
        this.menus.push({title:this.translate.instant(title),link:link,badge:item});
    }else{
      this.menus = this.menus.filter(m=>m.title!=this.translate.instant(title));
    }
    this.bellBadgeDot = this.menus.length>1;
  }

  /*onSearch(value:Set<string>){
    this.editorService.getEditor().subscribe(editor=>{
      this.searchService.query({entity:{keywords:[Array.from(value)[0]]}}).subscribe(res=>{
        new SearchAction(res.getEntity().map((e:ISearch)=>e.type),editor,value,this.toastrService);
      })
    });
  }*/
}
