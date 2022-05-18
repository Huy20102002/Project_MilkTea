import { AbstractControl, ValidationErrors } from "@angular/forms"

export function loginValidator(control:AbstractControl):ValidationErrors|null {
   const v =+ control.value;
   if(isNaN(v)){
       return {'gte':true,'requiredValue':10}
   }
   if(v<=10){
       return {'gte':true,'required':10}
   } 
   return null;
}

// Example
/*
  myForm= new formgroup({
      name: new formcontrol('',[loginValidator])
  })
  -Phần view viết như bình thường
*/