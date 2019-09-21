import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public dados: any;
  public alertar: any;
  public estruturaHtml: any;

  constructor(private http: HttpClient) {

    let url = 'http://www.mocky.io/v2/5d858f57320000bb1407b280';

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
