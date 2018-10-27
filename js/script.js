window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let annadir = document.createElement("button");
             let borrar = document.createElement("button");
             let texto= task;
             element.innerText = texto;
             element.appendChild(document.body.appendChild(annadir));
             annadir.innerHTML='Realizada.';
             element.appendChild(document.body.appendChild(borrar));
             borrar.innerHTML='Eliminar.';
             borrar.addEventListener("click", function(){
                console.log(this);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });
             annadir.addEventListener("click", function(){
                element.innerHTML=texto.strike();
                element.appendChild(document.body.appendChild(borrar));
             });

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
}