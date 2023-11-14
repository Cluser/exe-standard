import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAbstractComponent } from './modal-abstract.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

describe('ModalAbstractComponent', () => {
    let component: ModalAbstractComponent;
    let fixture: ComponentFixture<ModalAbstractComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalAbstractComponent],
            providers: [DynamicDialogRef]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalAbstractComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close the modal', () => {
        const spy = jest.spyOn(component.ref, 'close');
        component.close();
        expect(spy).toHaveBeenCalled();
    });

    it('should save the value', () => {
        const value = 'test';
        const spy = jest.spyOn(component.ref, 'close');
        component.save(value);
        expect(spy).toHaveBeenCalledWith(value);
    });
});

