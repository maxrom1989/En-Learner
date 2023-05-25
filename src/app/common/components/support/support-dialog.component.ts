import { FormsModule, NgModel } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { SupportModalComponent } from './components/support-modal/support-modal.component';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ISupportData } from './interfaces/support-data';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  selector: 'support-dialog',
  templateUrl: './support-dialog.component.html',
  styleUrls: ['./support-dialog.component.css'],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TooltipModule
  ],
  providers: [DialogService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportDialogComponent {

  ref: DynamicDialogRef | null = null;
  @Input() error: string = '';
  
  constructor(public dialogService: DialogService,
    private messageService: MessageService) {}

  show() {
    this.ref = this.dialogService.open(SupportModalComponent,
      {
        header: 'Support',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
      });
    this.ref.onClose.subscribe((topic: ISupportData) => {
      this.ref = null;
      if (topic) {
        this.messageService.add({ severity: 'info', summary: 'Message sent with topic: ', detail: topic.selectedTopic });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
