import { Component, OnInit } from '@angular/core';

// GSAP
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor () { }

  ngOnInit() {
    this.initAnimations();
  }

  initAnimations() {
    var heroStaggerElements = ".subheader>p, .header>span, .resume>.__btn, .hero_img";
    gsap.fromTo(heroStaggerElements, {
      x: -50,
    }, {
      x: 0,
      duration: 1.5,
      stagger: {
        grid: "auto",
        from: "center",
        axis: "x",
        ease: "none",
        amount: 0.001
      }
    });
    gsap.to(".socials>a>svg", {
      y: -20,
      duration: 1.5,
      stagger: {
        grid: "auto",
        from: "center",
        axis: "y",
        ease: "none",
        amount: 0.5
      }
    });
    gsap.fromTo("._element1", { 
        opacity: 0
      }, { 
        opacity: 1,
        duration: 3
      }
    );
  }

}
