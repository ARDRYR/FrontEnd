

function create_input() {     //제목과 내용부분 글과 input 생성하기기
  let title_text = document.createElement("span");    //제목부분 글 만들기기
  title_text.textContent = "제목을 입력하세요";
  document.querySelector(".content_container").append(title_text);

  let title = document.createElement("input");      //제목부분 input만들기기
  title.setAttribute("type", "text");
  title.className = "title";
  document.querySelector(".content_container").append(title);

  let content_text = document.createElement("span");    //내용부분 글 만들기기
  content_text.textContent = "내용을 입력하세요";
  document.querySelector(".content_container").append(content_text);

  let content = document.createElement("input");    //내용부분 input만들기기
  content.setAttribute("type", "text");
  content.className = "content";
  document.querySelector(".content_container").append(content);
}

function createContent(tit, con) {     //제목과 내용 값을 저장하기기
  let title_value = document.createElement("span");  //제목값 span 생성하기기
  title_value.textContent = tit;

  let content_value = document.createElement("span");  //내용값 span 생성하기기
  content_value.textContent = con;

  const node = document.createElement("div");
  node.appendChild(title_value)
  node.appendChild(content_value)

  return node;
}

const new_content_button = document.querySelector(".new_content_button");
new_content_button.addEventListener("click", function(){    //생성하기 버튼을 눌렀을 때 이벤트
  



  create_input();        //제목+내용 생성 function 실행하기기
  let submit = document.createElement("input");       //등록하기 버튼 만들기기
  submit.setAttribute("type", "button");
  submit.className = "submit_button";
  submit.value = "등록하기";
  document.querySelector(".content_container").append(submit);



  const submit_button = document.querySelector(".submit_button");   
  submit_button.addEventListener("click", function(){       //등록하기 버튼을 눌렀을 때 제목+내용 input값 저장장
    
    const value_container = document.createElement("div");
    value_container.className = "value_container";
    document.querySelector(".content_value").append(value_container)
    
    
    const title_input = document.querySelector(".title").value;     //제목 input 저장장
    const content_input = document.querySelector(".content").value;   //내용 input 저장장


    const node = createContent(title_input, content_input);   //제목과 내용 값을 저장하기기
    value_container.appendChild(node);


    let edit = document.createElement("input");   //수정하기 버튼 만들기기
    edit.setAttribute("type", "button");
    edit.className = "edit_button";
    edit.value = "수정하기";
    value_container.append(edit); 



    let delete_button = document.createElement("input");      //삭제하기 버튼 만들기
    delete_button.setAttribute("type", "button");
    delete_button.className = "delete_button";
    delete_button.value = "삭제하기";
    value_container.append(delete_button);


  
    const remove_content = document.querySelector(".value_container");
    const remove_parent = document.querySelector(".content_value");

    const del_button = delete_button;
    del_button.addEventListener("click", function(e){
      const button = e.target;
      const todo = button.parentElement;
      todo.remove();
    })
  })
})

