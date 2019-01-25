import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.css']
})
export class McComponent implements OnInit {
posts:any[];

  constructor(private http : Http) {

   }

  ngOnInit() {
this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe( response => {
  this.posts = response.json()
})
  }

  ajouter(input : HTMLInputElement) {
    let post = {title: input.value, id : ''}
      this.http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(post)).
      subscribe(response=>{
          this.posts.splice(0,0,post)
      })
  }
  update(post,inputTitle) {
    let updatepost = {title : inputTitle ,  id :post.id};
      this.http.put("https://jsonplaceholder.typicode.com/posts" + "/" + post.id , JSON.stringify(updatepost)).subscribe(response=> {
        // update current view 
        let index = this.posts.indexOf(post);
        this.posts[index] = updatepost;
    })
  }
}
