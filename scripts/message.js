$( document ).ready(function() {

   $('#dataTables').DataTable({
      responsive: true,
      processing: true,
      serverSide: true,
      searching: false,
      ordering: true,
      "ajax": "/message/table",
      columns: [
         { data: 'id' },
         { data: 'title' },
         { data: 'description' },
         { data: 'active' },
         { data: 'createdAt' },
         { data: 'updatedAt' }
      ]
   });
});

