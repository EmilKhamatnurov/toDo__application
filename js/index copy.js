let input_task = document.getElementById("task-input"); // Блок в вводом задач
let button_task = document.getElementById("task-button"); // кнопка добавления задач
let task_list = document.getElementById("todo_list");// список задач
let complete_list = document.getElementById("done__tasks"); //список завершенных задач

let task_couter = 1; // счетчик задач

let t_done = false;
let task_in_list = document.createElement('li');
let task_info = document.createElement('div');
let task_buttons = document.createElement('div');
let task = document.createElement('input');
let label_for_task = document.createElement('label');
let pen = document.createElement('button');
let bin = document.createElement('button');

button_task.addEventListener('click', function(){
    // Обертка задачи в списке. Элемент li
    task_in_list.classList.add("ToDo-Task");
    task_in_list.id = "task" + task_couter;
    //Обертка для checkbox и label
    task_info.classList.add("task-info"); // wrapper
    //Обертка для кнопок bin и pen 
    task_buttons.classList.add("task__buttons"); // wrapper
    //checkbox
    task.setAttribute("type", "checkbox");
    task.setAttribute("name", "task" + task_couter);
    //label
    label_for_task.appendChild(document.createTextNode(" " + input_task.value));
    label_for_task.setAttribute("for", "task" + task_couter);
    //кнопка pen
    pen.classList.add("pen");
    task.setAttribute("name", "task" + task_couter);
    //кнопка bin
    bin.classList.add("bin");
    task.setAttribute("name", "task" + task_couter);
    //создание вложенности элементов задачи в списке
    task_info.appendChild(task);
    task_info.appendChild(label_for_task);
    task_buttons.appendChild(pen);
    task_buttons.appendChild(bin);

    task_in_list.appendChild(task_info);
    task_in_list.appendChild(task_buttons);
    //Добавление вложенности в маркированный список
    // document.querySelector('ul').appendChild(task_in_list);
    task_list.appendChild(task_in_list);
    //Увеличение счетчика задач на 1 для нумерации задач
    ++task_couter;

    // task.addEventListener("change", function(){
    //     if (this.checked) {
    //         //сперва еще можно добавить класс для зачеркивания, а потом уже переносить его в другую группу - выполненные задачи
    //         transfer = task_in_list.cloneNode(true);
    //         complete_list.appendChild(transfer);
    //         task_list.removeChild(task_in_list);
    //         label_for_task.classList.add("line-thr");
    //         return false;
    //     }
    //     else if (this.checked == false) {
    //         transfer2 = transfer.cloneNode(true);
    //         task_list.appendChild(transfer2);
    //         complete_list.removeChild(transfer);
    //         label_for_task.classList.remove("line-thr");
    //         return false;
    //     }

        // Нужно реализоваться обратный функционал
        // else {
        //     transfer = task_in_list.cloneNode(true);
        //     task_list.appendChild(transfer);
        //     complete_list.removeChild(task_in_list);
        //     return true;
        // }
    });
    //Обработка события кнопки pen (редактировать)
    // pen.addEventListener("click",function(){
    //     label_for_task.contentEditable = true;
    //     label_for_task.focus();
    //     label_for_task.onblur = function(){
    //     label_for_task.contentEditable = false;
    //     };
    // });
    // //Обработка события кнопки bin (удалить)
    // bin.addEventListener("click",function(){
    //     document.querySelector('ul').removeChild(task_in_list);
    // });

// });


