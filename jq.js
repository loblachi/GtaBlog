   $(function () {
       closeAll(); 

       $('.' + 'psubhead').on("click", function () {
           closeAll(); 
           var data = $(this).attr("data-id")
           $('#' + data).toggle(150);  
           console.log(data); 

       })

   })
   function closeAll() {
       $('.' + 'fdiv').hide(); 
   }