import { TestBed } from '@angular/core/testing';

import { ListavatarsService } from './list-avatars.service';

describe('BlogpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListavatarsService = TestBed.get(ListavatarsService);
    expect(service).toBeTruthy();
  });
});
