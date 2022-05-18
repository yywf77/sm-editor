import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  menus = [
    {
      title:"文件",
      children:[
        {
          title:"新建 (RMeta N)",
          icon:"file",
          data:{
            eventKey:['MetaRight', 'KeyN']
          }
        },{
          title:"打开 (RMeta O)",
          icon:"folder-open",
          data:{
            eventKey:['MetaRight', 'KeyO']
          }
        },{
          title:"保存 (LMeta S)",
          icon:"save",
          data:{
            eventKey:['MetaLeft', 'KeyS']
          }
        },{
          title:"同步 (LMeta F)",
          icon:"save",
          data:{
            eventKey:['MetaLeft', 'KeyF']
          }
        }
      ]
    },
    {
      title:"编辑",
      children:[
        {
          title:"撤消 (Ctr Z)",
          icon:"undo",
          data:{
            eventKey:['MetaLeft', 'KeyZ']
          }
        },{
          title:"重做 (Ctr R)",
          icon:"repeat",
          data:{
            eventKey:['ControlLeft', 'KeyR']
          }
        },{
          title:"删除 (Del)",
          icon:"trash",
          data:{
            eventKey:['Backspace']
          }
        }
      ]
    },{
      title:"视图",
      children:[
        {
          title:"全屏 (Escape)",
          icon:"expand",
          data:{
            eventKey:['Escape']
          }
        }
      ]
    },{
      title:"拓扑",
      children:[
        {
          title:"通风网络图",
          icon:"share-alt",
        },
        {
          title:"抽采分源图",
          icon:"sitemap",
          data:{

            eventKey:['Escape']
          }
        }
      ]
    },{
      title:"解算",
      children:[
        {
          title:"自然分风解算",
          icon:"calculator",
          data:{
          }
        }
      ]
    },{
      title:"帮助",
      children:[
        {
          title:"帮助文档",
          icon:"book",
          data:{
          }
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
