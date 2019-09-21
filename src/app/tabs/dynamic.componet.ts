
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-component',
  templateUrl: 'dynamic.componet.html',
})
export default class DynamicComponent {
  public dados: any;
  constructor(private http: HttpClient) {
    let url = 'http://www.mocky.io/v2/5d862a7f320000f96e07b369';
    this.http.get(url).subscribe((response) => {
      this.dados = response;

      this.dados.forEach(d => {
        var script = document.createElement("script");
        script.innerHTML = d.funcoes;
        document.getElementsByTagName('head')[0].appendChild(script);
        document.getElementById("xpto").insertAdjacentHTML('afterend', d.estruturaHtml);
      })

    });
  }

}