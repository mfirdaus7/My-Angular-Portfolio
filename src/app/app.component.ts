import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';
import {
  profile,
  heroTech,
  stats,
  summary,
  skillGroups,
  experience,
  education,
  certGroups,
} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly profile = profile;
  readonly heroTech = heroTech;
  readonly stats = stats;
  readonly summary = summary;
  readonly skillGroups = skillGroups;
  readonly experience = experience;
  readonly education = education;
  readonly certGroups = certGroups;
  readonly year = new Date().getFullYear();

  readonly links = [
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly active = signal('summary');
  readonly menuOpen = signal(false);
  private observer?: IntersectionObserver;

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) this.active.set(e.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    for (const l of this.links) {
      const el = document.getElementById(l.id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
