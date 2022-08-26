import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { characterService } from 'src/app/services/character';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css']
})
export class CharactersCardComponent implements OnInit {

  character: Character;

  constructor(private service: characterService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.service.getChrt(id).subscribe(item =>{
        this.character = item
      });
    })
  }

  onBack():void{
    this.router.navigate(['/characters'])
  }
  

}
