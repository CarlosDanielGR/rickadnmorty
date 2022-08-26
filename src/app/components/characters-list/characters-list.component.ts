import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { characterService } from 'src/app/services/character';
import { CharactersCardComponent } from '../characters-card/characters-card.component';
import { Character } from '../interface/character.interface';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  public onSelectITem: string = '0';
  public verSelect: string = '';
  public chrtStatus: Character[] = [];
  public status: Array<any> = ['Alive', 'Dead', 'Unknown'];
  public characters: Character[] = [];
  public page: number = 0;
  public search: string = '';

  constructor(private service: characterService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllCharacter().subscribe(data => {
      this.characters = data
    } );
  }

  nextPage(){
    this.page += 5
  }

  prevPage(){
    if(this.page > 0)
      this.page -= 5
  }

  searchChrt(search: any){
    this.page = 0;
    this.search = search;
  }

  chrtCard(character: string){
    this.router.navigate(['/charactersCard',character])
  }

  onSelect(){
    this.verSelect = this.onSelectITem;
    this.service.selectChrt(this.verSelect).subscribe(res =>{
      this.chrtStatus.push(res['results']);
      this.characters = this.chrtStatus['0']
    });
  }

}
