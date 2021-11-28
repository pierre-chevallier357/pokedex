import { ElementRef } from '@angular/core';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';

describe('Directive: BorderCard', () => {
  it('should create an instance', () => {
    const directive = new BorderCardDirective(new ElementRef('#f5f5f5'));
    expect(directive).toBeTruthy();
  });
});
