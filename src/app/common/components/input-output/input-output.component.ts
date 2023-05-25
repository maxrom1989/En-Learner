import { Component, ElementRef, Input, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MainDataService } from '../../services/main-data.service';
import { DataTransferService } from '../../services/data-transfer.service';
import { RephraseService } from '../../services/rephrase.service';
import { GeneratorService } from '../../services/generator.service';
import { ClipboardToDataService } from '../../services/clipboard-to-data.service';
import { IStyle } from '../../interfaces/style.interface';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputOutputComponent implements OnInit, AfterViewInit {

  @ViewChild('textarea', { static: false }) textarea!: ElementRef;

  baseInput: string = '';
  baseOutput: string = '';
  @Input() selectedStyle: string = '';
  @Input() tabName: string = '';
  buttonItems: MenuItem[];
  highlight: string = '';
  rephraseMethod?: string;
  repeats?: number;
  buttonWidth: IStyle = { "width": '210px' };

  constructor(public mainDataService: MainDataService,
    private messageService: MessageService,
    private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService,
    private rephraseService: RephraseService,
    private generatorService: GeneratorService,
    private cdr: ChangeDetectorRef) {
    this.buttonItems = [
      {
        label: 'Add To Clipboard',
        icon: 'pi pi-refresh',
        command: () => {
          this.dataTransferService.transferData(this.baseInput, this.tabName, this.selectedStyle);
          this.update();
        }
      }
    ];
  }

  ngOnInit() {
    this.observeClipboardToInput();
    this.observeRepeatsFromGenerator();

  }

  ngAfterViewInit() {
    this.textarea.nativeElement.focus(); // тут надо делать метод textareaFocus() ?
  }


  handleRephrase(input: string): void {
    this.mainDataService.getAnswer(input).subscribe({
      next: (response) => {
        this.messageService.add(
          { severity: 'info', summary: 'Success', detail: `Data ${this.baseInput} Saved` });
        this.baseOutput = response;
      },
      error: (err) => {
        this.messageService.add(
          { severity: 'error', summary: 'Error', detail: err });
        console.warn(err);
      }
    });
    const selectedMethod = this.rephraseService.rephraseMethod;
    this.rephraseMethod = selectedMethod;
    this.textarea.nativeElement.focus();
    // this.changeDetector.detectChanges();
  }

  update(): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Added to ClipBoard' });
  }

  addToClipboard(): void {
    this.dataTransferService.transferData(this.baseInput, this.tabName, this.selectedStyle);
    this.update();
    this.textarea.nativeElement.focus();
  }

  addOutputToClipboard(): void {
    this.dataTransferService.transferData(this.baseOutput, this.tabName, this.selectedStyle);
    this.update();
  }

  onOutputMouseEnter(): void {
    this.highlight = 'highlight';
  }

  onOutputMouseLeave(): void {
    this.highlight = '';
  }

  isDisabled(): boolean {
    return !this.baseInput || (!this.repeats && this.tabName == '(generator)');
  }

  observeClipboardToInput(): void {
    this.clipboardToData.data$.subscribe((input) => {
      const lastData = input;
      if (lastData) {
        this.baseInput = lastData;
      }
      // this.changeDetector.detectChanges();
      this.cdr.markForCheck()
    });
  }

  observeRepeatsFromGenerator(): void {
    this.generatorService.repeatsData$.subscribe((repeats) => {
      this.repeats = repeats;
      // this.changeDetector.detectChanges();
      this.cdr.markForCheck()
    });
  }

}









