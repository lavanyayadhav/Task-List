//Define UI variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listners
loadEventListners();

//load all event listeners
function loadEventListners(){
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',deleteTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('keyup',filterTask);
}

//Add task
function addTask(e){
        if(taskInput.value === ''){
            alert('Add a Task');
        }
        
        const li = document.createElement('li');

        li.ClassName = 'collection-item';

        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');

        link.className = 'delete-item secondary-content';

        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        tasklist.appendChild(li);

        taskInput.value='';
        //console.log(li);

    e.preventDefault();
}


//delete Task
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
            
    }
    //console.log(e.target);
    
}

function clearTask(e){
    //taskList.innerHTML = '';

    //Faster
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
        
    }
    //https://jsperf.com/innerhtml-vs-removechild
}

function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
                const item = task.firstChild.textContent;
                if(item.toLowerCase().indexOf(text) != -1){
                    task.style.display ='block';
                }
                else{
                    task.style.display = 'none';
                }
    });
}