import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { postcode } from '../../assets/js/postcode.js';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  frm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.frm = this.formBuilder.group({
        addr1: [''],
        addr2: ['']
    });
}
  openDaumPopup() {
    postcode(this.renderer, this.popup.nativeElement, data => {
        this.frm.controls.addr1.setValue(data.address);
        console.log(data);
        /*
            {
                address: "대전 서구 둔산로 100"
                addressEnglish: "100, Dunsan-ro, Seo-gu, Daejeon, Korea"
                addressType: "R"
                apartment: "N"
                autoJibunAddress: ""
                autoJibunAddressEnglish: ""
                autoRoadAddress: ""
                autoRoadAddressEnglish: ""
                bcode: "3017011200"
                bname: "둔산동"
                bname1: ""
                bname2: "둔산동"
                buildingCode: "3017011200114200000021946"
                buildingName: "대전광역시청"
                hname: ""
                jibunAddress: "대전 서구 둔산동 1420"
                jibunAddressEnglish: "1420, Dunsan-dong, Seo-gu, Daejeon, Korea"
                noSelected: "N"
                postcode: "302-789"
                postcode1: "302"
                postcode2: "789"
                postcodeSeq: "007"
                query: "대전시청"
                roadAddress: "대전 서구 둔산로 100"
                roadAddressEnglish: "100, Dunsan-ro, Seo-gu, Daejeon, Korea"
                roadname: "둔산로"
                roadnameCode: "3166019"
                sido: "대전"
                sigungu: "서구"
                sigunguCode: "30170"
                userLanguageType: "K"
                userSelectedType: "R"
                zonecode: "35242"
            }
        */
    });
}

closeDaumPopup() {
    this.renderer.setStyle(this.popup.nativeElement, 'display', 'none');
}
}
