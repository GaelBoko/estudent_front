import { Component , OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-layout',
  templateUrl: './p-layout.component.html',
  styleUrls: ['./p-layout.component.css']
})

export class PLayoutComponent implements OnInit {

  cssUrl: SafeResourceUrl;
  styleurls: string[]=['assets/css/style.css','assets/css/responsive.css','assets/css/color_style/color_1.css','assets/settings_box/settings_box.css','http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' ];
  scripturls: string[]=['assets/js/modernizr.custom.js','assets/js/device.min.js','assets/js/jquery-1.11.0.min.js','assets/js/jquery.nicescroll.min.js','assets/js/jquery.matchHeight-min.js',
  'assets/js/jquery.superslides.min.js','assets/js/jquery.fs.boxer.min.js','assets/js/jquery.easing.js','assets/js/jquery.main.js','assets/settings_box/settings_box.js'];
  cssUrls:SafeResourceUrl[]=[];
  jsUrls:SafeResourceUrl[]=[];
  constructor(private renderer: Renderer2,public _router: Router,private sanitizer: DomSanitizer) {

  }


  ngOnInit() {
    for(let url in this.styleurls){
      this.cssUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.styleurls[url]));
    }
    for(let url in this.scripturls){
      this.loadScript(this.scripturls[url]);
    }
  }

  private loadScript(url: string) {
    const script = this.renderer.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
}
