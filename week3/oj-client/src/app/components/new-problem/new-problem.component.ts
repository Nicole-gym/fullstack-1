import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

const DEFAULT_PROBLEMS: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
})

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEMS);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.addProblem(this.newProblem);

    this.newProblem = Object.assign({}, DEFAULT_PROBLEMS);
  }

}
