export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "LISTS",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/products",
      submenu : [
        {
        title: "Users",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/users",
        },
        {
        title: "Hotels",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/hotels",
        },
        {
        title: "Rooms",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/rooms",
        },
        {
        title: "Transactions",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/transactions",
        },
      ]
    },
    {
      title: "NEWS",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/categories",
      submenu : [
        {
        title: "New Hotel",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/new_hotel",
        },
        {
        title: "New Room",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/new_room",
        } 
      ]
    },
    {
      title: "Order",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
