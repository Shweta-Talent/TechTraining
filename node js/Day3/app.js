//using core js only
// favicon : icon for tab
// // console.log("start")
// // setTimeout(() =>
// // {
// //     console.log("settimer")
// // },1)
// // console.log("end")

// // const http= require('http');
// // const server= http.createServer((req,res) => {}  to create server http

 

// // console.log(req.url,req.method)   // req seen in consol
// //    //for different pages
// //    if(req.url==='/login' && req.method==='GET'){
// //     res.write('<html>')
// //     res.write('<body> hello login</body>')
// //     res.write('</html>')
// //     res.end()
// //  //return ---early exit
// //    }else if(req.url==='/login' && req.method==='POST'){

// //    }

// // }else{
// //     res.write('<html>')
// //     res.write('<body> hello world </body>')
// //     res.write('</html>')
// //     res.end()
// // })
// // server.listen(3000)



// const http=require('http');
// const fs=require('fs');
// routeHandler=require("./other") 

// const server =http.createServer(routeHandler);
// routeHandler =(req,res) =>
// {     
//     if(req.url==="/"){
//     res.write("jhdbhsa");
//     res.end();
//     }
//     else if(req.url==="/message" && req.method==="GET"){
//         res.write("<html>");
//         res.write('<body> <form action="/message" method ="POST" ><input type = "text" name="message" /> <button type= "submit">submit</button></form></body>');
//         res.write("</html>");
//        return res.end();
//     }

/// chunk eg torrent file
//     else if(req.url==="/message" && req.method==="POST"){
//       const body=[]
//     req.on("data",(chunk)=>{
//         body.push(chunk)
//     });
//     req.on("end",()=>{
//       const parsedBody =Buffer.concat(body).toString().split("=")[1]
//       console.log(parsedBody)
//       fs.writeFile("copies.txt",filename,(err)=>
//       {


//         if(err){
//             res.statusCode=500
//             res.getHeader('location','/')
//             console.log('error')
//             res.end()
//         }
//         res.statusCode=303
//         res.getHeader('location','/')
//         console.log('after writing data')
//         res.end()
//       }
//       )
//     });
//     }
//     else{
//         res.write('<body>home page</body>')
//         res.end()
//     }
  
// }

// module.exports={routeHandler}
// //multiple export


// server.listen(3005)


// task
string= "1234567890"
start = string.slice(0,2)
end=string.slice(-2)
middle=string.slice(2,9)

// const padded= end.padEnd(middle.length, '*');
// const final = start.concat(padded);
// console.log(final);

// console.log(`${start}${middle.replace(/1234567890/g,"*")}${end}`)
// console.log(middle.replace(/[0-9]/g,"*"))
// space 
// var string = "Welcome to          TalentSystems";
// var regexPattern = /\s+/g;
// \s is more than one space

// var ans = string.replace(regexPattern, " ");
// console.log(ans);


// names="shweta thakkar"

// split

