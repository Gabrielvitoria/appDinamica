import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public dados: any;
  public alertar: any;
  public estruturaHtml: any;
  loader: any;

  constructor (private http: HttpClient, private loadingCtrl: LoadingController) {
    let url = 'http://www.mocky.io/v2/5d8c12d92e00006a00abd682';
  
    this.http.get(url)
      .subscribe((response) => {
        this.dados = response;

        var script = document.createElement("script");
        script.innerHTML = this.dados.funcoes;
        document.getElementsByTagName('head')[0].appendChild(script);
        document.getElementById("xpto").innerHTML = this.dados.estruturaHtml;
       
      });

  }


}
