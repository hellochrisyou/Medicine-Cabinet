import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  facebook = true;
  instagram = false;
  soundCloud = false;
  youtube = false;

  facebookZ = true;
  soundCloudZ = false;
  youtubeZ = false;
  instagramZ = false;

  constructor() {
  }

  public ngOnInit(): void {
    this.activateFacebook();
  }

  public activateFacebook(): void {
    this.facebook = true;
    this.instagram = false;
    this.soundCloud = false;
    this.youtube = false;

    this.facebookZ = true;
    this.youtubeZ = false;
    this.soundCloudZ = false;
    this.instagramZ = false;

  }
  public activateInstagram(): void {
    this.instagram = true;
    this.facebook = false;
    this.soundCloud = false;
    this.youtube = false;

    this.instagramZ = true;
    this.youtubeZ = false;
    this.soundCloudZ = false;
    this.facebookZ = false;
  }
  public activateYoutube(): void {
    this.youtube = true;
    this.facebook = false;
    this.soundCloud = false;
    this.instagram = false;

    this.youtubeZ = true;
    this.soundCloudZ = false;
    this.facebookZ = false;
    this.instagramZ = false;
  }
  public activateSoundCloud(): void {
    this.soundCloud = true;
    this.facebook = false;
    this.youtube = false;
    this.instagram = false;

    this.soundCloudZ = true;
    this.facebookZ = false;
    this.instagramZ = false;
    this.youtubeZ = false;

  }
}
