import { ApiCursos } from "./api"

export const funcoes = {

    FilterCursosName : (txt)=>{

      let CursoFiltrado = ApiCursos.filter((value)=>{

            if(txt){
                

                let txts = txt.toLowerCase()
                if(value.Nome.toLocaleLowerCase().includes(txts) ){
                return value
                
            }else{
                    
            }

            }else{
                return ApiCursos
            }
            
      })  

      return CursoFiltrado

    },

    FilterCursosCategory : (txt)=>{

      let CursoFiltrado = ApiCursos.filter((value)=>{

            if(txt){
                

                let txts = txt.toLowerCase()
                if(value.Categoria.toLocaleLowerCase().includes(txts) ){
                return value
                
            }else{
                    
            }

            }else{
                return ApiCursos
            }
            
      })  

      return CursoFiltrado

    },
    FilterCursosCargaHoraria : (txt)=>{

      let CursoFiltrado = ApiCursos.filter((value)=>{
            if(txt){
                
                let txts = txt.toLowerCase().replace(" " , "-")
                let carga = value.CargaHoraria.toLowerCase().replace(" " , "-")
                if(carga.includes(txts) ){
                return value
                
            }else{}

            }else{
                return ApiCursos
            }
            
      })  

      return CursoFiltrado

    },

    
}