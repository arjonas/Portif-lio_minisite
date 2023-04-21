import React from 'react';
import DataProject from './dataProject';
import { Splide, SplideSlide } from '@splidejs/react-splide';


import './projetos.css'



console.log('dadad')




function ProjectPage() {
  return (


    <div className='folhaProjeto'>
        
    
          {/* Navmenu */}

    <section className="conteudo">
      
    <img class="img  mx-12 mx-auto" src="assets/euu.jpg" alt=""></img>
 <h1 class="img mx-auto mx-12"> Sidnei Arjonas</h1>

<div class="menu flex justify-center">

<ul class="flex items-center">
 <li class="mr-6">
   <a class="text-500 hover:text-blue-800" href="/">Sobre</a>
 </li>
 <li class="mr-6">
   <a   class="text-gray-400 hover:text-blue-800" href="/projetos">Projetos</a>
 </li>
 <li class="mr-6">
   <a   class="text-500 hover:text-blue-800" href="#">Contato</a>
 </li>

</ul>
</div>  



  <Splide aria-label="Projetos">
      
          {/* Projetos*/}

      <SplideSlide>


          
          {/* BlogDedev */}

          <DataProject 
          img="./assets/bloggg.gif" description="Blog ,com autenticão, que simula  um blog de noticias tech do  universo de tecnologia." t1="Flask"
          t2="SqlAlchemy" t3="Bootstrap" t4="CSS" title="Blog deDev"
          stylee={{color:"white"}}/>
          
          </SplideSlide>



          {/* 6POKEMONS */}

          <SplideSlide>

          <DataProject 
          img="./assets/poke.gif" description="Aplicação web ,com autenticão, que simula  o usuario como um treinador do  universo do anime Pokemon " 
          t1="Flask"
          t2="Sqlite" 
          t3="Bootstrap" 
          t4="CSS" 
          t5 ="PokeApi"
          title="Pokemon6"
          stylee={{color:""}}/>

          </SplideSlide>


      </Splide>


  <footer>
    <div className="footer">
    
      <a className="mx-auto" href=""><i className="fab fa-github-square"></i></a>
      <a className="mx-auto">  <i className="fab fa-linkedin"></i></a>
    
      <a href="" className="mx-auto"><i className="fab fa-instagram"></i></a>
    
      <a href="" className="mx-auto"><i className="fab fa-whatsapp-square"></i></a>

      
    
        
    
    </div>
    <p className='copyrights'>© Copyright 2023</p>
    </footer>

    </section>


    </div>

  );
}

export default ProjectPage;
