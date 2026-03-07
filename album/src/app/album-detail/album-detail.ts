import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent{

  album!: Album;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.editedTitle = data.title;
    });
  }

  saveTitle() {
    const updatedAlbum = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      this.album.title = this.editedTitle;
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}