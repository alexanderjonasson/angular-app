import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitService } from './services/unit';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  units: any[] = [];
  constructor(
    private unitService: UnitService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.unitService.getUnits().subscribe((data: any[]) => {
      this.units = data;
      console.log(data);
      this.cdr.detectChanges();
    });
  }
}
