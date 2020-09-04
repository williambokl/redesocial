class HttpService {

    post(url, dadosParaEnvio){

        return new Promise((resolve, reject) => {
            
            let xhr = new XMLHttpRequest();

            xhr.open('POST', url);

            xhr.setRequestHeader('Content-type', 'application/json');

            xhr.onreadystatechange = () => {
                
                if(xhr.readyState == 4){

                    if(xhr.status == 200){

                        resolve(xhr.responseText);

                    }else{
                        reject(console.log('Deu errado, mas enviou'));
                    }
                    
                }

            }

            xhr.send(JSON.stringify(dadosParaEnvio));
        })
        
    }
}


