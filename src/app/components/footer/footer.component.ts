import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonFab } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('fab')fab: IonFab;
  constructor(
    private loaderService: LoaderService,
    private router: Router,
  ) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.fab.activated = true;
  }
}
