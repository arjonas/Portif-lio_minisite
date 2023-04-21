import React from "react";


function dataProject(props) {


 return(
    
    <div className="quadrado2" style={props.stylee}>


<h2 className="title"> {props.title}</h2>

<img  className='imgproj' src={props.img}></img>


<h3 className="description">Descrição : </h3>   <p>{props.description}
    </p>


  

<h3 className="tec"> Tecnologias utillizadas : </h3>
<ol>

  <li>{props.t1}</li>
  <li>{props.t2}</li>
  <li>{props.t3}</li>
  <li>{props.t4}</li>
  <li>{props.t5}</li>
  <li>{props.t6}</li>
  <li>{props.t7}</li>
  <li>  <a  target="_blank" href="https://github.com/arjonas/pokemon6_iniciais/tree/master"></a><img className="github" src="./git.ico" alt=""></img></li>
</ol> 
            
</div>
      
 )
}


export default dataProject;