import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { UtilService } from '../services/util.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // @ViewChild('button') button: ElementRef;
  codeForm = new FormGroup({
    code: new FormControl('')
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private utilService: UtilService,
    private renderer: Renderer2,
    private loaderService: LoaderService
  ) {
    this.loaderService.self = 'home';
  }

  submit() {
    const inputCode = this.codeForm.value.code;
    if (inputCode === 'ktcs1234') {
      this.utilService.showToast('인증에 성공했습니다.');
      localStorage.setItem('isCertify', 'true');
      window.location.href = '/home';
    } else {
      this.utilService.showAlert('알림', '인증코드를 확인하세요');
    }
  }
  // focus(e) {
  //   this.renderer.addClass(this.button.nativeElement, 'closed');
  // }
  // blur(e) {
  //   this.renderer.removeClass(this.button.nativeElement, 'closed');
  // }
  ngOnInit() {
  }
}
