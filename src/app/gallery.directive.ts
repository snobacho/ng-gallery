import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {
  constructor( private elem: ElementRef ) { }

  @HostListener('click')
  imgChange() {
    let src:any = this.elem.nativeElement.src
    let mainImg:any = document.querySelector('#main-img')
    mainImg.src = src

    let imgSlide:any = document.getElementsByClassName('img-slide')
    for(let i = 0; i < imgSlide.length; i++) {
      imgSlide[i].classList.remove('active')
    }
    this.elem.nativeElement.parentElement.classList.add('active')
  }

}
