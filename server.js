const express= require("express")
const cors = require("cors")
const app = express()

const table = require("./templatesInit")
app.use(cors())
const translatte = require('translatte');
const express = require('express')
const cors = require("cors")
const fs = require("fs")


const translate = require('translate-google')
const { v4: uuidv4 } = require('uuid');



app.use(cors())


app.use(express.json({limit: '5gb'}))

app.get("/api/hello",async(req,res)=>{
  res.json({msg:"hello world"})
})

app.post("/api/html_translator",async(req,res)=>{
    try{
        const {text_array,language,direction,file,connected} = req.body
     
     let result = []
    
        let data = JSON.parse( fs.readFileSync(`./${language}.json`))
        //connected
        if(connected){
         
            const replacer = new RegExp(" ", 'g')
            
            let originalText =   text_array.toString().replace(replacer,"").replace(/\[\d+\]/g, '')
            .replace(/[&\/\\#,+()$@~%.'":*?<>{}]/g,'').toUpperCase()
            let detected_text = ""
           
            if(data != []){
            
           
              
              detected_text = data.filter(el => el.originalText ==originalText )[0]
            }
                
  
                let translated_text = ""
                if(detected_text != undefined){
               
                  translated_text = detected_text.translated_origine
                  let f = {
                    id:uuidv4(),
                    
                    originalText
                    ,
                    language,
                    translated_origine:translated_text
                   }//orginal_text:text_array[i],
                  //  translated_text,
                  //  direction,
                  //  file
                
                   f[String(file.split(".")[0]+"auto")] = text_array
                   f[String(direction)] = translated_text
  
                   f["file"] = file
                   
                   result.push(f)
                }else{
                   translated_text = await translate(text_array, {to: language})
                   let f = {
                    id:uuidv4(),
                    
                    originalText
                    ,
                    language,
                    translated_origine:translated_text
                   }
                   f[String(file.split(".")[0]+"auto")] = text_array
                   f[String(direction)] = translated_text
                   f["file"] = file
                 
               
                   result.push(f)
                }
               
               
  
               
                 
                 
  
          
           
       
            
            
            let final_array = [...data,...result]
       
         fs.writeFileSync(`./${language}.json`,JSON.stringify(final_array),'utf8')
       
     
          res.json({result:result[0]})
        }
        //not connected
        else{
          for(let i=0;i<text_array.length;i++){
            const replacer = new RegExp(" ", 'g')
            
            let originalText =   text_array[i].toString().replace(replacer,"").replace(/\[\d+\]/g, '')
            .replace(/[&\/\\#,+()$@~%.'":*?<>{}]/g,'').toUpperCase()
            let detected_text = ""
           
            if(data != []){
        
           
              
              detected_text = data.filter(el => el.originalText ==originalText )[0]
            }
                
  
                let translated_text = ""
                if(detected_text != undefined){
                 
                  translated_text = detected_text.translated_origine
                  let f = {
                    id:uuidv4(),
                    
                    originalText
                    ,
                    language,
                    translated_origine:translated_text
                   }//orginal_text:text_array[i],
                  //  translated_text,
                  //  direction,
                  //  file
              
                   f[String(file.split(".")[0]+"auto")] = text_array[i]
                   f[String(direction)] = translated_text
  
                   f["file"] = file
                   
                   result.push(f)
                }else{
                   translated_text = ""
                   let f = {
                    id:uuidv4(),
                    
                    originalText
                    ,
                    language,
                    translated_origine:translated_text
                   }
                   f[String(file.split(".")[0]+"auto")] = text_array[i]
                   f[String(direction)] = translated_text
                   f["file"] = file
               
               
                   result.push(f)
                }
               
               
  
               
                 
                 
  
          
           
       
            }
            
            let final_array = [...data,...result]
           
         fs.writeFileSync(`./${language}.json`,JSON.stringify(final_array),'utf8')
         
     
          res.json({result})



        }
      
    }catch(err){
        console.log(err)
    }
})






app.get("/api/getTemplates",async(req,res)=>{
    try{
         res.json({result:table})
    }catch(err){
        console.error(err.message)
        res.status(500).json(err.message)
    }
})


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})