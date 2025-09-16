import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {

  tasks = [
    {name: "Make Flutter Project", isCompleted: false, isReadOnly: true},
    {name: "Complete SpringBoot Project", isCompleted: false, isReadOnly: true},
  ];
  onSubmit(taskForm: NgForm) {
    console.log(taskForm)
    this.tasks.push({
      name: taskForm.controls['newTask'].value,
      isCompleted: false,
      isReadOnly: true
    });
  }

  onCheck(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    console.log(this.tasks);
  }

  onDelete(index: number) {
    console.log(index);
    this.tasks.splice(index, 1);
  }

  onEdit(index: number) {
    this.tasks[index].isReadOnly = false;
  }

  onSave(index: number, newTaskName: string) {
    this.tasks[index].name = newTaskName;
    this.tasks[index].isReadOnly = true;
  }

}
