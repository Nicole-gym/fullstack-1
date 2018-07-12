import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock_problems';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //list of problems
  problems: Problem[] = PROBLEMS;

  constructor() { }

  getProblems(): Problem[] {
    return this.problems;

  }

  getProblem(id : number): Problem {
    return this.problems.find((problem) => problem.id === id);
  }

  addProblem(problem: Problem){
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
