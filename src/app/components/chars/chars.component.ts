import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {
  chars: any = [];
  characters: any = [];
  searchChars: any = []; 
  constructor(private service: CharactersService) { }

 

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    console.log(characters);
    this.chars = characters.results;
    this.characters = characters;
    this.searchChars = characters;
  }
  
  search: string = '';
  rechargeChars() {
    this.searchChars = this.characters.filter((e: any) => e.name.toLowerCase().includes(this.search.toLowerCase()));
  }
 
}
