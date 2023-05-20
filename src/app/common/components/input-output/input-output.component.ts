import { Component, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MainDataService } from '../../services/main-data.service';
import { DataTransferService } from '../../services/data-transfer.service';
import { RephraseService } from '../../services/rephrase.service';
import { GeneratorService } from '../../services/generator.service';
import { ClipboardToDataService } from '../../services/clipboard-to-data.service';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['../header/header-app.component.css', './input-output.component.css']
})

export class InputOutputComponent {

  baseInput: string = '';
  baseOutput: string = '';
  @Input() selectedStyle: string = '';
  @Input() tabName: string = '';
  buttonItems: MenuItem[];
  highlight: string = '';
  rephraseMethod?: string;
  repeats?: number;

  constructor(public mainDataService: MainDataService,
    private messageService: MessageService,
    private dataTransferService: DataTransferService,
    private clipboardToData: ClipboardToDataService,
    private rephraseService: RephraseService,
    private generatorService: GeneratorService) {
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
    this.clipboardToData.data$.subscribe((data) => {
      const lastData = data;
      if (lastData) {
        this.baseInput = lastData;
      }
    });
    this.generatorService.repeatsData$.subscribe((repeats) => {
      this.repeats = repeats;
    });
  }

  ngAfterViewChecked() { }

  handleRephrase(input: string): void {
    this.mainDataService.getAnswer(input).subscribe({
      next: (res) => {
        this.messageService.add(
          { severity: 'info', summary: 'Success', detail: "Data: " + this.baseInput + " Saved" });
        this.baseOutput = res;
      },
      error: (err) => {
        this.messageService.add(
          { severity: 'error', summary: 'Error', detail: err });
        console.warn(err);
      }
    });
    const selectedMethod = this.rephraseService.rephraseMethod;
    this.rephraseMethod = selectedMethod;
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Added to ClipBoard' });
  }

  addToClipboard() {
    this.dataTransferService.transferData(this.baseInput, this.tabName, this.selectedStyle);
    this.update();
  }

  addOutputToClipboard() {
    this.dataTransferService.transferData(this.baseOutput, this.tabName, this.selectedStyle);
    this.update();
  }

  onOutputMouseEnter() {
    this.highlight = 'highlight';
  }

  onOutputMouseLeave() {
    this.highlight = '';
  }

}









