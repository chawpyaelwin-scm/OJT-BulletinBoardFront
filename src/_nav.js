export default {
  items: [
    {
      title: true,
      class: "",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "book",
      url: "/book",
      icon: "icon-cursor",
      children: [
        {
          name: "Book List",
          url: "/book/booklist"
        }
      ]
    },
    {
      name: "cart",
      url: "/cart",
      icon: "icon-cursor",
      children: [
        {
          name: "Cart List",
          url: "/cart/cartlist"
        }
      ]
    },
    
  ]
};

