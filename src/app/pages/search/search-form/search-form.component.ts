import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SearchComponent } from '../search.component';
import { Allas_filter_form } from '../Allas_filter_form';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-search-form',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  // srearchComponent = inject(SearchComponent);
  @Output('allasok') allasok: EventEmitter<[string, string]> = new EventEmitter()
  allas_form: FormGroup<Allas_filter_form>;

  constructor() {
    this.allas_form = new FormGroup<Allas_filter_form>({
      allas_kulcsszo: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      allas_telepules: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  submitApplication(): void {
    let allas_kulcsszo = this.allas_form.value.allas_kulcsszo ?? '';
    let allas_telepules = this.allas_form.value.allas_telepules ?? '';
    if (allas_kulcsszo === '' || allas_telepules === '')
      return
    this.allasok.emit([allas_kulcsszo, allas_telepules]);
  }
}
