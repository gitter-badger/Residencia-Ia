$(document).ready(function(){$("#dataTables").DataTable({responsive:!0,processing:!0,serverSide:!0,searching:!1,ordering:!0,ajax:"/schedule/table",columns:[{data:"id"},{data:"title"},{data:"description"},{data:"active"},{data:"createdAt"},{data:"updatedAt"}]})});