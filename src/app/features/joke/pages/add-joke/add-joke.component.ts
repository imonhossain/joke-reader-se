import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { JokeServices } from '../../services/joke.services';
import { JOKE_CATEGORIES, JOKE_TYPES, JOKE_FLAGS } from '../../../../shared/application.const';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
})
export class AddJokeComponent implements OnInit {

  public categoryList = JOKE_CATEGORIES;
  public typeList = JOKE_TYPES;
  public flagList = JOKE_FLAGS;
  public saveForm: FormGroup;
  uuid:string;

  constructor(
    private jokeService: JokeServices,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.uuid = uuidv4();
    this.saveForm = this.formBuilder.group({
      id: [],
      category: ["", [Validators.required]],
      type: ["", [Validators.required]],
      flags: this.formBuilder.array(this.flagList.map(x => !1)),
      content: ["", [Validators.required]],
      delivery: [""],
    
    });

    
    
  }
  createFlag(name): FormGroup {
    return this.formBuilder.group({
      name
    });
  }

  onSubmit(){
    console.log("submit");
    if (!this.saveForm.valid) return;

    let joke = this.saveForm.value;
    this.jokeService.addJoke({'uuid':this.uuid, 'joke':joke });

    console.log("joke", joke);
  }
  get flagsControl(): FormArray {
    return <FormArray>this.saveForm.get('flags');
  }
  get typeControl(): FormArray {
    return <FormArray>this.saveForm.get('type');
  }

}
