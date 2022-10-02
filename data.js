$(document).ready(function () {
  $("#btn").click(function () {
    $("table").append("<caption></caption>");
    $("table").append("<thead></thead>");
    $("table").append("<tbody></tbody>");
    $("table").append("<tfoot></tfoot>");

    $("thead").append('<tr id="showheading"></tr>');

    $("tbody").append('<tr id="showcalories"></tr>');

    $("tbody").append('<tr id="showfat"></tr>');

    $("tfoot").append('<tr id="showven"></tr>');

    for (var i = 0; i <= 4; i++) {
      $("#showheading").append("<th></th>");
      $("#showcalories").append("<td></td>");
      $("#showfat").append("<td></td>");
      $("#showven").append("<td></td>");
    }
    $.getJSON("data.json", function (jqdata) {

       $("caption").append(jqdata.title);
       $("#showheading th:first-child").append(jqdata.heading);
       $("#showheading th:nth-child(2)").append(jqdata.head1);
       $("#showheading th:nth-child(3)").append(jqdata.head2);
       $("#showheading th:nth-child(4)").append(jqdata.head3);
       $("#showheading th:last-child").append(jqdata.head4);

       $("#showcalories td:first-child").append(jqdata.subheadcal);
       $("#showcalories td:nth-child(2)").append(jqdata.cal1);
       $("#showcalories td:nth-child(3)").append(jqdata.cal2);
       $("#showcalories td:nth-child(4)").append(jqdata.cal3);
       $("#showcalories td:last-child").append(jqdata.cal4);

       $("#showfat td:first-child").append(jqdata.subheadfat);
       $("#showfat td:nth-child(2)").append(jqdata.fat1);
       $("#showfat td:nth-child(3)").append(jqdata.fat2);
       $("#showfat td:nth-child(4)").append(jqdata.fat3);
       $("#showfat td:last-child").append(jqdata.fat4);

       $("#showven td:first-child").append(jqdata.subheadven);
       $("#showven td:nth-child(2)").append(jqdata.ven1);
       $("#showven td:nth-child(3)").append(jqdata.ven2);
       $("#showven td:nth-child(4)").append(jqdata.ven3);
       $("#showven td:last-child").append(jqdata.ven4);

    //   
    //   $("#showcalories p:nth-child(2)").append("AGE: " + jqdata.;
    //   $("#showfat p:last-child").append("SEX: " + jqdata.);
    });
  });
});
