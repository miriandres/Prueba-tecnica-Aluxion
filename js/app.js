'use strict'
const menu         = document.querySelector('.header__btn')
const navegador    = document.querySelector('.header__menu')
const header__h1   = document.querySelector('.header__h1')
const contenedor   = document.querySelector('.header__contenedor')
const header__li   = document.querySelectorAll('.header__li')
const items        = document.querySelectorAll('.submenu__li a')
const productos    = document.querySelectorAll('.productos__img')

const opciones     = document.querySelectorAll('.footer__li')
const slider__info = document.querySelector('.main__contenido')
const slider__img  = document.querySelector('.main__imagenes')
const info         = document.querySelectorAll('.main__opcion')
const imagenes     = document.querySelectorAll('.imagenes__opcion')

let posicion = 0

// Menu
menu.addEventListener('click', ()=>{
    menu.classList.toggle('rotate')
    navegador.classList.toggle('show')
    header__h1.classList.toggle('blanco')
    contenedor.classList.toggle('aparecer')
})
header__li.forEach((cadaLi, i)=>{
    cadaLi.addEventListener('click', ()=>{
        let posicion = i
        header__li.forEach((cadaLi, i)=>{
            if(posicion === i){
                header__li[i].classList.toggle('ver')
            }
            else{
                header__li[i].classList.remove('ver')
            }
        })
    })
})


items.forEach((cadaItem, i)=>{
    cadaItem.addEventListener('mouseover', ()=>{
        productos.forEach((cadaProducto, i)=>{
            cadaProducto.classList.remove('aparecer')
        })
        productos[i].classList.add('aparecer')
    })
})
items.forEach((cadaItem, i)=>{
    cadaItem.addEventListener('mouseout', ()=>{
        productos[i].classList.remove('aparecer')
    })
})

opciones.forEach((cadaOpcion, i)=>{
    opciones[i].addEventListener('click', ()=>{
        posicion = i
        mostrar()
        desplazar()
    })
})

// Controlar slider mediante flechas
document.body.addEventListener('keydown',  e=>{
    console.log( e.key )

    if( e.key == 'ArrowUp'){
        posicion = 0
        mostrar()
        desplazar()
    }
    if( e.key == 'ArrowDown'){
        posicion = 1
        mostrar()
        desplazar()
    }
})

// Funciones
const desplazar = () =>{
    slider__info.style.transform = `translateY(-${ 50 * posicion }%)`
    slider__img.style.transform = `translateY(-${ 50 * posicion }%)`
}
const mostrar = () =>{
    opciones.forEach((cadaOpcion, i)=>{
        opciones[i].classList.remove('activo')
        info[i].classList.remove('ver')
        imagenes[i].classList.remove('ver')
    })
    opciones[posicion].classList.add('activo')
    info[posicion].classList.add('ver')
    imagenes[posicion].classList.add('ver')
}
