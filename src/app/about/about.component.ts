import { Component, OnInit } from '@angular/core';

// GSAP
import { gsap } from 'gsap';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initAnimations();
  }

  initAnimations() {
    var StaggerElements = ".about_me>.highlights, .about_me>p, .design>h4, .webdev>h4, .design>p, .webdev>p";
    gsap.fromTo(StaggerElements, {
      x: -20,
    }, {
      x: 0,
      duration: 2,
      stagger: 0.2
    });
    gsap.fromTo("._element2", { 
        opacity: 0,
        filter: 'none'
      }, { 
        opacity: 1,
        filter: 'drop-shadow(0 5px 10px gray)',
        duration: 3
      }
    );
  }

}
