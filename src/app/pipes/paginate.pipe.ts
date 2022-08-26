import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../components/interface/character.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(characters: Character[], page: number = 0, search: any = ''): Character[] {

    if( search.length === 0)
      return characters.slice(page, page+5);

    const filtered = characters.filter( data => data.name.includes( search ) );

    return filtered.slice(page, page+5);
    
  }

}
