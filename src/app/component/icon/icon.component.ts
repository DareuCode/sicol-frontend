import { Component, Input, OnInit } from '@angular/core';
import { IconService } from './icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true, 
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  svgContent: SafeHtml = '';

  constructor(
    private iconService: IconService,
    private sanitizer: DomSanitizer 
  ) {}
  
  ngOnInit(): void {
    if (this.name) {
      this.iconService.getIcon(this.name).subscribe(
        (svg) => this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg),
        (error) => console.error("Error al cargar svg: ", error)
      );
    }
  }
}
