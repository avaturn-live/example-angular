import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-continue',
  imports: [],
  templateUrl: './continue.component.html',
  styleUrl: './continue.component.scss',
})
export class ContinueComponent implements AfterViewInit {
  @ViewChild('avatar') avatarWrapper!: ElementRef<HTMLDivElement>;
  constructor(private avatarService: AvatarService) {}

  ngAfterViewInit(): void {
    console.log('wrapper: ', this.avatarWrapper.nativeElement);
    if (this.avatarService.avatar?.inited) {
      this.avatarService.avatar.attachDOMNode(this.avatarWrapper.nativeElement);
    }
  }
}
