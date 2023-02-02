// CUSTOM FETCH TO MAKE HTTP REQUESTS
export const helpHttp = () => {
   const customFetch = (endpoint, options) => {
      // DEFAULT HEADER TO FETCH
      const defaultHeader = {
         accept: 'application/json',
      };
      // ABORTCONTROLLER TO CANCEL REQUEST IF NEDEED
      const controller = new AbortController();
      options.signal = controller.signal;
      // SET DEFAULT METHOD FOR FETCH
      options.method = options.method || 'GET';
      // COMBINE DEFAULT HEADERS AND OPTIONS HEDEAR IF EXISTS
      options.headers = options.headers? {...defaultHeader,...options.headers } : defaultHeader;

      // STRINGIFY BODY IF EXISTS, DELETE IF NOT
      options.body = JSON.stringify(options.body) || false;
      if(options.body) delete options.body;

      // LOG OPTIONS FOR DEBBUGINF PURPOSES
      console.log(options);

      // CANCEL REQUEST AFTER 3 SECONDS IF NOT RESOLVED
      setTimeout(() => controller.abort(), 3000);

      // RETURN FETCH PROMISE, CATCH ERRORS AND RETURN AS AN OBJECT 
      return fetch(endpoint, options)
         .then((res)=> 
            res.ok 
               ? res.json() 
               : Promise.reject({
                  err:true,
                  status: res.status || "00",
                  statusText: res.statusText || "Error"
               })
         )
         .catch((err) => err);
         
   };

   const get = (url, options = {}) => customFetch(url, options);

   
   const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
   };
   
   const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
   };
   
   const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
   };

   return { get, post, put, del };

}