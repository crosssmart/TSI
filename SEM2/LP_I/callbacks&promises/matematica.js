export const ehPar = (n) => {
   //V1
   /*if (n % 2 == 0) {
       return true;
   } else {
       return false;
   }*/

   //V1.2
   //return (n % 2 == 0) ? true : false;

   //V1.3
   return n % 2 == 0;
}

//V2
export const ehParV2 = (n) => {
   return new Promise((resolver, rejeitar) => {
      if (isNaN(n)) {
         rejeitar('[Erro]: Número inválido');
      } else {
         resolver(numero % 2 == 0)
      }
   })
}

//V3
const URL_API = 'https://api.isevenapi.xyz/api/iseven/';
export const ehParV3 = (n) => {
   return new Promise((resolver, rejeitar) => {
      if (isNaN(n)) {
         rejeitar('[Error]: Número inválido');
      } else {
         //fetch(URL_API + n)
         fetch(`${URL_API}${n}`)
            .then((resposta) => {
               resposta.json()
                  .then((resultado) => {
                     //const iseven = resultado.iseven;
                     const { iseven } = resultado;
                     resolver(iseven);
                  })
            })
            .catch((error) => {
               rejeitar(error)
            })
      }
   })
}