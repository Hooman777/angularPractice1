import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vihan",
  templateUrl: "./vihan.component.html",
  styleUrls: ["./vihan.component.css"]
})
export class VihanComponent implements OnInit {
  constructor() {}
  initialValue = "Hello world is an old fashion";

  members = [
    { id: 1, first: "h", second: "o", third: "o" },
    { id: 2, first: "v", second: "i", third: "h" },
    { id: 3, first: "a", second: "m", third: "i" },
    { id: 4, first: "s", second: "h", third: "i" }
  ];
  group = { first: "", second: "", third: "" };
  ngOnInit() {}
  onInputData = () => {
    let newMember = { id: this.members.length + 1, ...this.group };
    this.members.push(newMember);
  };
}
