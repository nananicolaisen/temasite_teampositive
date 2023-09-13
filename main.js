/*sætter const */

const url = "https://sjvaxamawsuvohugkten.supabase.co"

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdmF4YW1hd3N1dm9odWdrdGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMzIzMjYsImV4cCI6MjAwOTYwODMyNn0.J0mEiOxBFDS4evyM2u9bW880fAxIIBAEpABGjxAFX9Q"

//kalder fetch
fetch(url+"/rest/v1/vild",{
    method: "GET",
    headers: {
    apikey: key
    }
})
.then(res=>res.json())
.then(showData)

function showData(items){
 console.log(items);
   items.forEach(element => {

        if (element.tags){
            if(element.tags.includes("bær"))
            console.log(element);

        }
    }