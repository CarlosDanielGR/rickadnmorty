import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, fetchAllCharacter } from '../components/interface/character.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class characterService {

  @Output() chrtEmit: EventEmitter<any> = new EventEmitter();

  private urlApi: string = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<Character[]>{
    return this.http.get<fetchAllCharacter>(`${this.urlApi}`).pipe(map(this.transCharacter));
  }

  getChrt(id: string): Observable<Character>{
    return this.http.get<Character>(`${this.urlApi}${id}`);
  }
  
  selectChrt(status: string): Observable<Character>{
    const url = `${this.urlApi}?status=${status}`;
    return this.http.get<Character>(url);
  }

  private transCharacter( data: fetchAllCharacter){
    const characterList: Character[] = data.results.map( chrt => {

      const image = `https://rickandmortyapi.com/api/character/avatar/${chrt.id}.jpeg`

      return{
        id: chrt.id,
        name: chrt.name,
        status: chrt.status,
        species: chrt.species,
        image: image,
        type: chrt.type,
        gender: chrt.gender,
        origin: chrt.origin,
        location: chrt.location
      }
    });

    return characterList
  }
  
}
