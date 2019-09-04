import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'summary'
})
export class Summary impliments PipeTransform{
    transform(value :string, limit: number=10){
        return value.substring(0,limit) + '...read more'
    }
}