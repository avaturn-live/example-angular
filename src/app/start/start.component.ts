import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent implements AfterViewInit {
  sessionData: string = '';
  enablePIP = false;
  loading = false;
  @ViewChild('avatar') avatarWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('avatarPopup') avatarPopup!: ElementRef<HTMLDivElement>;

  constructor(private avatarService: AvatarService) {}

  get inited() {
    if (!this.avatarService.avatar) return false;
    return this.avatarService.avatar.inited;
  }

  ngAfterViewInit(): void {
    if (this.avatarService.avatar?.inited) {
      this.avatarService.avatar.attachDOMNode(this.avatarWrapper.nativeElement);
    }
  }

  initAvatar(): void {
    if (!this.avatarWrapper) return;

    this.loading = true;

    this.avatarService
      .initSession(this.avatarWrapper.nativeElement)
      .subscribe(() => (this.loading = false));
  }
  switchView() {
    if (
      !this.avatarService.avatar ||
      !this.avatarService.avatar.inited ||
      !this.avatarPopup
    )
      return;

    this.enablePIP = !this.enablePIP;
    this.avatarService.avatar.attachDOMNode(
      this.enablePIP
        ? this.avatarPopup.nativeElement
        : this.avatarWrapper.nativeElement,
    );
  }
}
