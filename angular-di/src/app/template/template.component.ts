import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
    <p>
      template works!
    </p>
  `,
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
