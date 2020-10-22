import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { JokeServices } from '../../services/joke.services';
import { JOKE_CATEGORIES, JOKE_TYPES, JOKE_FLAGS } from '../../../../shared/application.const';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  public id = null;
  constructor(
    private jokeService: JokeServices,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.uuid = uuidv4();
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params['params']['id'] || "";
    })
    this.saveForm = this.formBuilder.group({
      id: [""],
      category: ["", [Validators.required]],
      type: ["", [Validators.required]],
      flags: this.formBuilder.array(this.flagList.map(x => !1)),
      content: ["", [Validators.required]],
      delivery: [""],
    });

    if(this.id){
      let joke =  this.jokeService.getJoke(this.id);
      this.saveForm.patchValue(joke);
    }
  }

  createFlag(name): FormGroup {
    return this.formBuilder.group({
      name
    });
  }

  onSubmit(){
    if (!this.saveForm.valid) return;

    let joke = this.saveForm.value;
    if(!joke.id){
      joke.id = this.uuid
      this.jokeService.addJoke(joke);
    }else{
      this.jokeService.updateJoke(joke);
    }

    this.router.navigate(["joke"]);
  }

  get flagsControl(): FormArray {
    return <FormArray>this.saveForm.get('flags');
  }

  get typeControl(): FormArray {
    return <FormArray>this.saveForm.get('type');
  }

}
