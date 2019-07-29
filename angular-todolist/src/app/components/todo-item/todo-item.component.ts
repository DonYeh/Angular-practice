import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}
  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed //because it's hyphenated, have to use quotation marks ''
    };

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log("delete");
  }
}
